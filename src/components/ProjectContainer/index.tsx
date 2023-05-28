import { FC } from 'react'

type Props = {
  children: React.ReactNode
  width: number
  height: number
}
export const ProjectContainer: FC<Props> = ({ children, width, height }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
      <rect fill="#efefef" width="100%" height="100%" />
      {children}
    </svg>
  </svg>
)