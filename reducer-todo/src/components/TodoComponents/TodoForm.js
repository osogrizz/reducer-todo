import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../../reducers/reducer';
import styled from 'styled-components'

// import Todo from './Todo'

import './Todo.css'

export const TodoForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('')
  // const [complete, setComplete] = useState(false)



  const handleChange = (event) => {
    event.preventDefault()
    // console.log('change value', event.target.value)
    setInput(event.target.value)
  }

  const handleClear = (event) => {
    event.preventDefault()
    console.log('clear')


    dispatch({
      type: 'CLEAR',
      // payload: state
    })
  }

  const handleAdd = (event) => {
    event.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      item: input,
      completed: false,
      id: Date.now(),
    })
    setInput('')
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)  
    // setInput('')
  }

  
  
  const toggleComplete = (event) => {
    event.preventDefault()
    event.target.classList.toggle('complete')
    console.log(event.target.value)
    dispatch({
      type: 'TOGGLE_COMPLETED',
      id: event.target.id,
      payload:  event.target.value
    })
    console.log(state)
  }


 
  return (
    <div style={{margin: '40px'}}>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} value={input} name={input} />

        <button onClick={handleAdd}>
          Add Todo
        </button>

        <button onClick={handleClear}>
          Clear Completed
        </button>

      </form>
      <div style={{display: 'flex', justifyContent: 'center', margin: '40px auto', width: '900px', flexWrap: 'wrap'}}>
        {
          state.map( (todo) => (
          <Item key={todo.id} id={todo.id} onClick={toggleComplete} value={todo.id} >
            {todo.item}
          </Item>
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