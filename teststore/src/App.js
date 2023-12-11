import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/card';
const { getData } = require("./Components/db/db");
const bud = getData(); 

function App() {
  return (
    <>Welcome to Fifth Pocket Exotics
    <Button title={'Add'} disable={false} type={'add'} />
    <Button title={'Remove'} disable={false} type={'remove'} />
    <Button title={'Purchase Now'} disable={false} type={'checkout'} /> 
    {bud.map((bud) => (
      <Card bud={bud} key={bud.id} />
    ))}
    </>

  );
}

export default App;
