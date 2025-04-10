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
        <div className="relative">
          <RandomImage />
          <div className="absolute top-0 right-0 z-10">
            <Weather />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <TaskInput />
          </div>
        </div>
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
