import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div>
        <p>thanh dat</p>
        <button onClick={() => setShow(!show)}>Switch</button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setShow(!show)}>Switch</button>
      </header>
    </div>
  );
}

export default App;
