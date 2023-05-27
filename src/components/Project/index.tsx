import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'

export const Project: FC = () => {
  const { project, status, error } = useSelector((state: RootState) => state.project)

  if (status === 'loading') {
    return <>Loading...</>
  }

  if (error) {
    return <>{error}</>
  }
  
  return (
    <div>
      {project?.name && (<p>Name: {project.name}</p>)}
      {project?.id && (<p>ID: {project.id}</p>)}
    </div>
  )
}