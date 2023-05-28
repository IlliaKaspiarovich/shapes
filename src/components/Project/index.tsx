import { FC } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'
import { ProjectContainer } from 'components/ProjectContainer'
import { Shape } from '../Shape'
import styles from './Project.module.css'

export const Project: FC = () => {
  const { project, status, error } = useSelector((state: RootState) => state.project)

  if (status === 'loading') {
    return <>Loading...</>
  }

  if (error) {
    return <>{error}</>
  }

  return (
    <>
      {project?.name && (<p>Name: {project.name}</p>)}
      {project?.id && (<p>ID: {project.id}</p>)}
      <div className={styles.projectWrapper}>
        {project !== null && (
          <ProjectContainer height={project.height} width={project.width}>
            {project.items.map((shape) => <Shape key={shape.id} {...shape} />)}
          </ProjectContainer>
        )}
      </div>
    </>
  )
}