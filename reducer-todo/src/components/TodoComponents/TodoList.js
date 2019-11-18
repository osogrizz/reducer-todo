// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useReducer } from 'react'
import {initialState, reducer} from '../../reducers/reducer';

import Todo from './TodoForm'

const [state, dispatch] = useReducer(reducer, initialState);


const TodoList = () => {

  console.log('state', state)


  return (
    <div>

      { 
        state.map( (todo, index) => {
          return (
           <Todo /> 
          )
        })
      
      } 
    </div>
  )
}

export default TodoList

