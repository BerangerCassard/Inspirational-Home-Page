import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setText, clearText } from './barSlice';
import { addCard } from '../CardTable/cardSlice';
import { useState } from 'react';

const TaskInput = () => {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(text));
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value); // Met à jour le texte dans Redux
  };

  const handleClear = () => {
    dispatch(clearText()); // Efface le texte
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Ajouter une tâche</h2>
        <div className="flex flex-col space-y-4">
          <form onSubmit={handleSubmit}>
            <input 
                id="task-input"
                name="task-input"
                required
                type="text" 
                value={text} 
                onChange={handleChange} 
                placeholder="Écrivez une tâche..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> 
            <button 
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600 transition-colors pt-px mt-8"
            >
             Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
