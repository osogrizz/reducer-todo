import React from 'react';
// import {initialState, reducer} from './reducers/reducer';

import TodoForm from './components/TodoComponents/TodoForm';


import './App.css';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)

  // console.log('state', state)
  return (
    <div className="App">
      <TodoForm />
        {/* {!state ? (
            <h2>Loading...</h2>
          ) : (
            
          state.map(todo => (
          <h2 key={todo.id}>{todo.item}</h2>
          ))
        
          )
        } */}
  
    
    </div>
  );
}

export default App;
