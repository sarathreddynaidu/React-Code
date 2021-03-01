import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [new1, setNew1] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setNew1(name);
  }

  return (
    <div className="container">
      <h1>Hello {new1}</h1>
      <input
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
