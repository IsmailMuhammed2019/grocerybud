import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  return (
    <section className="section-center">
      <form action="" className="grocery-form">
        <h3>Grocery List</h3>
        <div className="form-control">
          <input type="text" className="grocery" />
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
