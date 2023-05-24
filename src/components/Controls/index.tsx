import { FC } from 'react'

export const Controls: FC = () => {

  return (
    <div>
      Project ID:&nbsp;
      <input type='text' placeholder='For random leave empty'/>
      <button>Fetch</button>
      <hr style={{ marginTop: 10, marginBottom: 10 }} />
    </div>
  )
}