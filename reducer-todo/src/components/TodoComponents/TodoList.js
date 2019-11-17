// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useReducer } from 'react'
import {initialState, reducer} from '../../reducers/reducer';

import Todo from './TodoForm'

const [state, dispatch] = useReducer(reducer, initialState);


const TodoList = () => {

  const toggleComplete = (event) => {
    console.log(event.target.value)

  }


  return (
    <div>

      { 
        this.state.map( todo => {
          return (
            todo ? <Todo key={todo.id} task={todo.task} completed={todo.completed} id={todo.id} toggleComplete={toggleComplete} /> : null
          )
        })
      
      } 
    </div>
  )
}

export default TodoList

