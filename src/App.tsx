import { FC } from 'react'
import { Provider } from 'react-redux'
import { Controls } from 'components/Controls'
import { Project } from 'components/Project'
import { store } from 'store'
import styles from './App.module.css'

export const App: FC = () => {

  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Controls />
        <Project />
      </div>
    </Provider>
  )
}

export default App;
