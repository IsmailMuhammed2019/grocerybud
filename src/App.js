import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }
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
      <button className="clear-btn">
        Clear List
      </button>
    </section>
  )
}

export default App
