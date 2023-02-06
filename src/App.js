import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
   const [name, setName] = useState('')
   const [list, setList] = useState([])
   const [isEditing, setIsEditing] = useState(false)
   const [editID, setEditID] = useState(null)
   const [alert, setAlert] = useState(
    {show: false,
    msg: '',
    type: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("This is working")
      console.log(name)
    }

   return (
    <section className='section-center'>
      {alert.show && <Alert />}
      <form onSubmit={handleSubmit} className="grocery-form" >
        <h3>Grocery List</h3>
        <div className="form-control">
          <input type="text" name='grocery' value={name} onChange={(e) => setName(e.target.value)} className='grocery'/>
          <button className="submit-btn">{isEditing ? 'Edit' : 'Submit'}</button>
        </div>
        <button className="clear-btn">Clear List</button>
      </form>
    </section>

  )
}

export default App
