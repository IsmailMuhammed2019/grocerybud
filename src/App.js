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
      if(!name){
        //deal with alert here
        showAlert(true, 'danger', 'Please enter an Item')
      }else if(name && isEditing){
        //deal with editing here
      }else{
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
      }
    }

    const showAlert = (show=false, type='', msg='') =>{
      setAlert({show, type, msg})
    }

   return (
     <section className='section-center'>
       <form onSubmit={handleSubmit} className='grocery-form'>
         {alert.show && <Alert {...alert}/>}
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
       {list.leng && (
       <div className='grocery-container'>
         <List items={list} />
         <button className='clear-btn'>Clear Items</button>
       </div>

       )
       }
     </section>
   )
}

export default App
