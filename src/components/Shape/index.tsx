import { FC } from 'react'
import { calculateBoundingBox } from 'utils.ts' 
import { Circle } from './Circle'
import { Rectangle } from './Rectangle'

const shapesMap: { [key in Shape['type']]: FC<ShapeSVG> } = {
  ellipse: Circle,
  rectangle: Rectangle
}

export const Shape: FC<Shape> = ({ type, width, height, x, y, rotation, color }) => {
  const boundingBox = calculateBoundingBox(width, height, rotation)
  const Component = shapesMap[type]

  return (
    <g>
      <Component
        width={width}
        height={height}
        x={x}
        y={y}
        rotation={rotation}
        color={color}
      />
      <circle fill="#FFFFFF" cx={x} cy={y} r="4" />
      <text x={x+5} y={y} fill="#FFFFFF">
        <tspan>{rotation}°</tspan>
      </text>
      <rect
        fill="none"
        stroke-width="2"
        stroke-opacity="0.4"
        stroke="#FF0000"
        width={boundingBox.width}
        height={boundingBox.height}
        transform={`translate(${x - (boundingBox.width/2)}, ${y - boundingBox.height/2})`}
      />
    </g>
  )
}