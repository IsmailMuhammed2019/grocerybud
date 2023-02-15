import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { isEditable } from '@testing-library/user-event/dist/utils'

const storeLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(storeLocalStorage)
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

  const handleSumbit = (e) => {
    e.preventDefault()
    if (!name) {
      // deal with alert only here
      showAlert(true, 'danger', 'pleae add an item')
    } else if (name && edit) {
      //deal with edit here
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditId(null)
      setEdit(false)
      showAlert(true, 'success', 'item edited successfully')
    } else {
      showAlert(true, 'success', 'Item successfull added')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const removeAlert = () => {
    showAlert(false, '', '')
  }

  const clearList = () => {
    setList([])
  }

  const deleteItem = (id) => {
    const itemdelted = list.filter((item) => item.id !== id)
    setList(itemdelted)
    showAlert(true, 'danger', 'item deleted successfully')
  }

  const editList = (id) => {
    const itemedited = list.find((item) => item.id === id)
    setName(itemedited.title)
    setEdit(true)
    setEditId(id)
    showAlert(true, 'danger', 'you want to edit item')
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      {alert.show && (
        <Alert
          showAlert={showAlert}
          {...alert}
          removeAlert={removeAlert}
          list={list}
        />
      )}
      <form onSubmit={handleSumbit} className='grocery-form'>
        <h3>Grocery List</h3>
        <div className='form-control'>
          <input
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} deleteItem={deleteItem} editList={editList} />
      </div>
      <button className='clear-btn' onClick={clearList}>
        Clear List
      </button>
    </section>
  )
}
export default App
