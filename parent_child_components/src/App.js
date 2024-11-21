import { useState } from 'react';
import './App.css';
import Childcomp from './Components/Childcomp';

function App() {
  const [childName, setChildName] = useState("Default");
  const receiveName = (name) => {
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Childcomp setfun={receiveName} />
      <p>Parent: My child said: {childName}</p>
    </div>
  );
}

export default App;
