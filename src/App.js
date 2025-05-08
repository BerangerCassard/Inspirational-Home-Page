import React from 'react';
import { Provider } from 'react-redux';
import { store }  from './app/store';
import RandomImage from './components/RandomImage';
import Quote from './components/Quote';
import Weather from './components/Weather';
import TaskInput from './features/Bar/Bar';
import {CardTable} from './features/CardTable/CardTable';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <div 
          id="background-container" 
          className="relative h-screen w-full"
          >
          <RandomImage />
          
          <div 
            id="weather-container" 
            className="absolute top-0 right-0 z-10"
            >
            <Weather />
          </div>

          <div
            id="task-input-container"
            className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-fit px-4 z-20 border border-red-500"
          >
            <TaskInput />
          </div>

          <div
            id="card-table-container"
            className="absolute inset-9 z-10 border-2 border-blue-500 h-[30%] top-[50%]"
          >
            <CardTable 
              className="flex gap-4 flex-row"
            />
          </div>
        </div>

        <Quote />
      </div>
    </Provider>
  );
}

export default App;
