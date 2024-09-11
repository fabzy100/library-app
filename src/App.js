import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [message, setMessage] = useState("Hello World!");
  const handleChangeMessage = () => {
    setMessage("New Message");
  };

  return (
    <div className="App">
      <h1>React Debugging Example</h1>
      <button onClick={handleChangeMessage}>Change Message</button>
      <ChildComponent message={message} />
    </div>
  );
}

export default App;
