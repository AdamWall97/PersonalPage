
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar} from 'reactstrap';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Navbar>test</Navbar>
          Edit <code>src/App.js</code> <Button color="danger">Test Bootstrap</Button>and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
