import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../../reducers/reducer';
import styled from 'styled-components'

import './Todo.css'

export const TodoForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const handleClear = (event) => {
    event.preventDefault()
    dispatch({
      type: 'clear',
      payload: state
    })
  }

  const handleAdd = () => {
    dispatch({
      type: 'item',
      payload: input
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)  
    setInput('')
  }
  
  const toggleComplete = (event) => {
    event.target.classList.toggle('complete');
    // console.log(event.target.value)

    dispatch({
      type: 'completed',
      payload: event.target
    })
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} value={input} name={input} />

        <button onClick={handleAdd}>
          Add Todo
        </button>

        <button onClick={handleClear}>
          Clear Completed
        </button>
      </form>
      <div>
        {
          state.map( todo => (
            <Item key={todo.id} onClick={toggleComplete} value={todo.id} >{todo.item}</Item>
          ))
        }
      </div>
    </div>
  ) 

}

export default TodoForm


const Item = styled.div`
  width: 200px;
  padding: 20px 25px;
  border: 1px solid gray;
  margin: 20px;
  text-transform: uppercase;
`