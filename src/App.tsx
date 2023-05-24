import { FC } from 'react'
import { Controls } from 'components/Controls'
import styles from './App.module.css'

export const App: FC = () => {
  return (
    <div className={styles.appContainer}>
      <Controls />
    </div>
  )
}

export default App;
