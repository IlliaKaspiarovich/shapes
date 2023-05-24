import { FC } from 'react'

export const Controls: FC = () => {

  return (
    <>
      Project ID:&nbsp;
      <input type='text' placeholder='For random leave empty'/>
      <button>Fetch</button>
      <hr />
    </>
  )
}