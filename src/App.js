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
      let newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
    }

   return (
     <section className='section-center'>
       <form onSubmit={handleSubmit} className='grocery-form'>
         {alert.show && <Alert />}
         <h3>Grocery List</h3>
         <div className='form-control'>
           <input
             type='text'
             name='grocery'
             value={name}
             placeholder='E.g eggs'
             onChange={(e) => setName(e.target.value)}
             className='grocery'
           />
           <button className='submit-btn' type='submit'>
             {isEditing ? 'Edit' : 'Submit'}
           </button>
         </div>
       </form>
       <div className='grocery-container'>
         <List items={list}/>
       </div>
       <button className='clear-btn'>Clear Items</button>
     </section>
   )
}

export default App
