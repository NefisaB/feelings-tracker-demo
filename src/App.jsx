import { useState } from 'react'
import './App.css'
import AddFeelingForm from './components/AddFeelingForm'
import FeelingsList from './components/FeelingsList'

function App() {

  const [feelings, setFeelings] = useState([
    { id: 0, name: 'Micka', title: 'Happy', description: 'Yelled first thing in the morning' },
    { id: 1, name: 'Entei', title: 'Happy', description: 'Ate first thing in the morning' },
    { id: 2, name: 'Micka', title: 'Sad', description: 'Saw Entei first thing in the morning' },
  ])

  const addFeeling = (name, title, description) => {
    let idValue = 0;
    if (feelings.length > 0) {
      idValue = feelings[feelings.length - 1].id + 1;
    }
    const feeling = {
      id: idValue,
      name: name,
      title: title,
      description: description
    }
    setFeelings([...feelings, feeling])
  }

  const deleteFeeling = (feelingId) => {
    let filtered = feelings.filter(function (value) {
      return value.id !== feelingId
    })
    setFeelings(filtered)
  }

  return (
    <>
      <div className='container vh-100 mt-4'>
        <h2 className='display-4 mb-5'>How are you feeling today?</h2>
        <div className='row'>
          <div className='col mb-5'>
            <AddFeelingForm addFeeling={addFeeling} />
          </div>
          <div className='col-6'>
            <FeelingsList feelings={feelings} deleteFeeling={deleteFeeling} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
