interface BoundingBox {
  width: number
  height: number
}

export const calculateBoundingBox = (width: number, height: number, angle: number): BoundingBox => {
  const angleRad = (Math.PI / 180) * angle

  const x1 = -width / 2
  const y1 = -height / 2
  const x2 = width / 2
  const y2 = -height / 2
  const x3 = width / 2
  const y3 = height / 2
  const x4 = -width / 2
  const y4 = height / 2

  const newX1 = x1 * Math.cos(angleRad) - y1 * Math.sin(angleRad)
  const newY1 = x1 * Math.sin(angleRad) + y1 * Math.cos(angleRad)
  const newX2 = x2 * Math.cos(angleRad) - y2 * Math.sin(angleRad)
  const newY2 = x2 * Math.sin(angleRad) + y2 * Math.cos(angleRad)
  const newX3 = x3 * Math.cos(angleRad) - y3 * Math.sin(angleRad)
  const newY3 = x3 * Math.sin(angleRad) + y3 * Math.cos(angleRad)
  const newX4 = x4 * Math.cos(angleRad) - y4 * Math.sin(angleRad)
  const newY4 = x4 * Math.sin(angleRad) + y4 * Math.cos(angleRad)

  const minX = Math.min(newX1, newX2, newX3, newX4)
  const maxX = Math.max(newX1, newX2, newX3, newX4)
  const minY = Math.min(newY1, newY2, newY3, newY4)
  const maxY = Math.max(newY1, newY2, newY3, newY4)

  return {
    width: maxX - minX,
    height: maxY - minY
  }
}
