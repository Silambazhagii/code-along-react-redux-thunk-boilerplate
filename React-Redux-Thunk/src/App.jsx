import React, { useState } from 'react';
import './App.css';
import actionProvider from './Components/Action';
import store from './Components/Store';

function App() {
  const [data, setData] = useState([]);

  store.subscribe(() => {
    setData(store.getState().data.data);
  });

  return (
    <div className="app-container">
      <button onClick={() => store.dispatch(actionProvider())}>Fetch Data</button>
      <div className="data-container"> 
        {data.map((item) => (
          <div key={item.id} className="data-item"> 
            <h1>{item.name}</h1>
            <h2>{item.username}</h2>
            <h2>{item.email}</h2>
            <h2>{item.website}</h2>
            <h2>{item.phone}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
