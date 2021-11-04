// import logo from './logo.svg';
import './App.css';
// import MyContainer from './react/myContainer';
import React, { useState } from "react";
import TestReferentialEqualityUseMemo from './react/TestReferentialEqualityUseMemo';

// let a = 1;
// let b = 2;
// let c = 3;
function App() {
  const [state, setState] = useState({ a: 1, b: 2, c: 3 });
  function AppSetState(data) {
    setState(data);
  }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <MyContainer /> */}
      <TestReferentialEqualityUseMemo value={state} setState={AppSetState} />
    </div>
  );
}

export default App;
