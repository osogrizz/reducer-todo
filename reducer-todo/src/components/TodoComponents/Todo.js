import React, { useReducer } from 'react'
import styled from 'styled-components'
import './Todo.css'

import {initialState, reducer} from '../../reducers/reducer';

const [state, dispatch] = useReducer(reducer, initialState);

const Todo = () => {

  const handleToggle = (event) => {
    
  }

  return (
    <Item onClick={handleToggle}>
      {/* {state.item} */}
    </Item>
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
