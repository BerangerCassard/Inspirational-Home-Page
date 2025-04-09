import React from 'react';
import RandomImage from './components/RandomImage';
import Quote from './components/Quote';
import Weather from './components/Weather';
function App() {
  return (
    <div className="App">
      <Weather />
      <RandomImage />
      <Quote />
    </div>
  );
}

export default App;
