import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [alert, setAlert] = useState({show: false, type:'', msg: ''})
  const [editId, setEditId] = useState(null)
  

  const handleSubmit = (e) => {
        e.preventDefault()
    if(!name) {
      showAlert(true, 'danger', 'enter a value')
    }else if(name && edit){
      //deal with edit
      
    }else{
      showAlert(true, 'success', 'Item successfull added')
    const newItem = {id: new Date().getTime().toString(), title: name}
    setList([...list, newItem])
    setName('')
    }
    }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg})
  }

  const removeAlert = () => {
    showAlert(false, '', '')
  }
  const clearList = () => {
    showAlert(true, 'danger', 'You have cleared the list')
    setList([])
  }

  const deleteItem = (id) => {
    const itemdeleted = list.filter((item) => item.id !== id)
    setList(itemdeleted)
    showAlert(true, 'danger', 'item has been deleted')
  }

  const editItem = (id) => {
    const itemEdit = list.find((item) => item.id === id)
    setName(itemEdit.title)
    setEdit(true)
    setEditId(id)
    showAlert(true, 'danger', 'you want to edit selected item')

  }
  return (
    <section className='section-center'>
      {alert.show && <Alert {...alert} removeAlert={removeAlert} list={list}/>}
      <form onSubmit={handleSubmit} className='grocery-form'>
        <h3>Grocery List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder='e.g eggs'
          />
          <button className='submit-btn' type='submit'>
            {edit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} deleteItem={deleteItem} editItem={editItem}/>
        </div>
      )}
      <button className='clear-btn' onClick={clearList}>Clear List</button>
    </section>
  )
}

export default App
