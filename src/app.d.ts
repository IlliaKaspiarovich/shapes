type Shape = {
  id: string
  type: 'ellipse' | 'rectangle'
  color: string
  rotation: number
  x: number
  y: number
  width: number
  height: number
}

type ShapeSVG = Omit<Shape, 'id' | 'type'>

type Project = {
  id: string
  name: string
  width: number
  height: number
  items: Shape[]
}
