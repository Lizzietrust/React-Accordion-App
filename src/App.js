import { useState } from 'react';
import './App.css';
import Data from './Data';
import Accordion from './Accordion';

function App() {
  const [data, setData] = useState(Data);
  
  return (
    <div className="App">
      <h1>Questions</h1>
      <div className="container">
        <div>
          {Data.map((val)=> {
            return (
              <Accordion {...val}/>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
