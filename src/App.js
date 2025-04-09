import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RandomImage from './components/RandomImage';
import Quote from './components/Quote';
import Weather from './components/Weather';
import TaskInput from './features/Bar/Bar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
        <RandomImage />
        <Quote />
        <TaskInput />
      </div>
    </Provider>
  );
}

export default App;
