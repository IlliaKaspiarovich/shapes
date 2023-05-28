import { FC } from 'react'

export const Rectangle: FC<ShapeSVG> = ({ color, x, y, width, height, rotation }) => (
  <rect
    fill={color}
    data-x={x}
    data-y={y}
    width={width}
    height={height}
    transform={`translate(${x}, ${y}) rotate(${rotation})  translate(-${width/2},-${height/2})`}
  />  
)