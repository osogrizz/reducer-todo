import React, {  useReducer } from 'react'


export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589,
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'item':
      return {
        item: this.state.item,
    }
    case 'completed':
      return {
        completed: !this.state.completed
    }  
    case 'id': 
      return {
        id: this.state.id
    }
    default: 
     return initialState
  }
}