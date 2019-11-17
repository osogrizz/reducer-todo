import React, { useReducer } from 'react'
import styled from 'styled-components'
import './Todo.css'

import {initialState, reducer} from '../../reducers/reducer';

const [state, dispatch] = useReducer(reducer, initialState);

const Todo = () => {
  // const handleClick = (evt) => {
  //   console.log('target', evt.target)
  //   evt.target.classList.toggle('complete')
  //   // toggleComplete(this.state.id)
  // }

  const toggleComplete = (taskId) => {
    console.log('taskId', taskId)
    // this.setState({
    //   todoList: this.state.todoList.map( todo => {
    //     if (todo.id === taskId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //     return todo;
    //   })
    // })
  }

  return (
    <Item >
      {this.state.item}
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
