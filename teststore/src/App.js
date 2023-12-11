import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/card';
const { getData } = require("./Components/db/db");

const bud = getData(); 

function App() {
  return (
    <React.Fragment>
      <h1 className="title">Welcome to Fifth Pocket Exotics</h1>
      Menu
      <Button title={'Add'} disable={false} type={'add'} />
      <Button title={'Remove'} disable={false} type={'remove'} />
      <Button title={'Purchase Now'} disable={false} type={'checkout'} /> 

      <div className="cards__container">
        {bud.map((bud) => (
          <Card bud={bud} key ={bud.id} />
        ))}
      </div>
    </React.Fragment>
  );
}
// Remove the closing curly brace
// }

export default App;