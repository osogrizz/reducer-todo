import React, { useState, useReducer } from 'react';
import {initialState, reducer} from '../../reducers/reducer';


export const TodoForm =  () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const handleClear = (event) => {
    event.preventDefault()
    console.log('cleared')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setInput('')
  }
  
 
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} value={input} name={input} />
        <button onClick={() => dispatch({ type: 'item', payload: input })} >Add Todo</button>
        <button onClick={handleClear} >Clear Completed</button>
      </form>
      {console.log('state', state)}
      {
        state.map(todo => (
        <h2 key={todo.id} onClick={() => dispatch({type: 'completed'})} >{todo.item}</h2>
        ))
      
        
      }

    </div>
  ) 

}

export default TodoForm
