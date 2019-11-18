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
    case 'ADD_TODO':
     case 'item':
        return (action.item === '') ? state : [ 
          ...state,
          {
            item: action.item,
            completed: action.completed,
            id: action.id,
          }
        ]


    case 'TOGGLE_COMPLETED':
        return state.map( todo => {
          if (todo.id !== action.id) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
        
        

      


    case 'CLEAR': 
      return state

    default: 
     return initialState
  }
}