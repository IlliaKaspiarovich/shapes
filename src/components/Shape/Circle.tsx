import { FC } from 'react'

export const Circle: FC<ShapeSVG> = ({ color, x, y, width, height, rotation }) => (
  <ellipse
    cx={width/2}
    cy={height/2}
    rx={width/2}
    ry={height/2}
    fill={color}
    data-x={x}
    data-y={y}
    transform={`translate(${x}, ${y}) rotate(${rotation})  translate(-${width/2},-${height/2})`}
  />
)