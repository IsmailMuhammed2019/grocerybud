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
        showAlert(true, 'success', 'Item Added to the list')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
      }
    }

    const showAlert = (show=false, type='', msg='') =>{
      setAlert({show, type, msg})
    }

    const clearList = () => {
      showAlert(true, 'danger', 'You have deleted all items in the list')
      setList([])
    }

    const removeItem = (id) => {
      showAlert(true, 'danger', 'Item deleted from the list')
      setList(list.filter((item) => item.id !== id))
    }
    const editItem = (id) => {
      const specificItem = list.find((item) => item.id === id)
      setIsEditing(true)
      setEditID(id)
      setName(specificItem)
    }


   return (
     <section className='section-center'>
       <form onSubmit={handleSubmit} className='grocery-form'>
         {alert.show && (
           <Alert {...alert} removeAlert={showAlert} list={list} />
         )}
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
       {list.length > 0 && (
         <div className='grocery-container'>
           <List items={list} removeItem={removeItem} editItem={editItem}/>
         </div>
       )}
       <button className='clear-btn' onClick={clearList}>
         Clear Items
       </button>
     </section>
   )
}

export default App
