// import React, {  useReducer } from 'react'


export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Another thing',
    completed: false,
    id: 294875028749
  }
]

export const reducer = (state , action) => {
  switch(action.type) {
    case 'item':
      return (action.payload === '') ? state : [ 
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        }
      ]
    case 'completed':
      return state.map( todo => {
        if (todo.id !== action.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })



    case 'clear': 
      return state
    default: 
     return initialState
  }
}