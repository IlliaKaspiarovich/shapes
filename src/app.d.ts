type Shape = {
  id: string
  type: string
  color: string
  rotation: number
  x: number
  y: number
  width: number
  height: number
}

type Project = {
  id: string
  name: string
  width: number
  height: number
  items: Shape[]
}
