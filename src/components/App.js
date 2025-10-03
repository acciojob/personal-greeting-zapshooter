import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {/* Only display greeting if input is NOT strictly empty */}
      {name !== '' && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;
