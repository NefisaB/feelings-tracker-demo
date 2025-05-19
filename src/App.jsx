import { useState } from 'react'
import './App.css'
import AddFeelingForm from './components/AddFeelingForm'

function App() {

  const [feelings, setFeelings] = useState([])

  const addFeeling = (name, title, description) => {
    const feeling = {
      name: name,
      title: title,
      description: description
    }
    setFeelings([...feelings, feeling])
  }

  return (
    <>
      <div className='container vh-100 mt-4'>
        <h2 className='display-4'>How are you feeling today?</h2>
        <AddFeelingForm addFeeling={addFeeling} />
      </div>
    </>
  )
}

export default App
