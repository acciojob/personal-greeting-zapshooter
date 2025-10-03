import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      {/* Do not remove the main div */}
      <label htmlFor="username" style={{ fontSize: '1.5rem' }}>
        Enter your name:
      </label>
      <br />
      <input
        type="text"
        id="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '300px', height: '32px', fontSize: '1.1rem', marginTop: '16px' }}
        placeholder=""
      />
      <div style={{ marginTop: '24px', fontSize: '1.4rem', fontWeight: '500' }}>
        {name && (
          <>Hello, {name}!</>
        )}
      </div>
    </div>
  );
};

export default App;
