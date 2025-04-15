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
        <div className="relative h-full w-full">
          <RandomImage />
          <div className="absolute top-0 right-0 z-10">
            <Weather />
          </div>
          <div id="task-input-container" className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-20 w-full px-4
          ">
            <TaskInput />
          </div>
          <div id="card-table-container" className="absolute inset-0 flex z-10 container mx-auto items-center justify-center h-89 max-w-3xl h-1/3 border-2 border-blue-500">
            <CardTable />
          </div>
        </div>
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
