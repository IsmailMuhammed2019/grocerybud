import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [alert, setAlert] = useState({show: false, type:'', msg: ''})

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {id: new Date().getTime().toString(), title: name}
    setList([...list, newItem])
    setName('')
    }
      console.log(list)
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        <h3>Grocery List</h3>
        <div className="form-control">
          <input type="text" className="grocery" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn">
            submit
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} />
      </div>
      <button className="clear-btn">
        Clear List
      </button>
    </section>
  )
}

export default App
