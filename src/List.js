import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const {id, title} = item
        return (
          <article className="grocery-item" key={id}>
            {title}
          </article>
        )
      })}
    </div>
  )
}

export default List
