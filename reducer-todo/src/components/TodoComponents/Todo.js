import React, { useReducer } from 'react'
import styled from 'styled-components'
import './Todo.css'

import {initialState, reducer} from '../../reducers/reducer';

const [state, dispatch] = useReducer(reducer, initialState);

const Todo = () => {
  console.log(state)
  const handleToggle = (event) => {
    console.log(event.target.value)
    event.target.classList.toggle('complete');
    
    // dispatch({
    //   type: 'COMPLETED',
    //   payload: event.target.value
    // })
    // console.log(state)
  }

  return ( state.map( todo => (
    <Item onClick={handleToggle}>
      {todo.item}
    </Item>
  ))
  )
}

export default Todo

const Item = styled.div`
  width: 200px;
  padding: 20px 25px;
  border: 1px solid gray;
  margin: 20px;
  text-transform: uppercase;
`
