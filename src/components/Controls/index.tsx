import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProject } from 'store/projectSlice'
import { AppDispatch } from 'store'

export const Controls: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [inputValue, setInputValue] = useState('')
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(event.target.value)
  }

  const handleButtonClick = () => {
    dispatch(fetchProject(inputValue))
    setInputValue('')
  }

  return (
    <div>
      Project ID:&nbsp;
      <input
        value={inputValue}
        onChange={handleInputChange}
        type='text' 
        placeholder='For random leave empty'
      />
      <button onClick={handleButtonClick}>Fetch</button>
      <hr style={{ marginTop: 10, marginBottom: 10 }} />
    </div>
  )
}