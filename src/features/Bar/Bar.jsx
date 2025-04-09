import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setText, clearText } from './barSlice';

const TaskInput = () => {
  const text = useSelector((state) => state.bar.text); // Sélectionne le texte depuis Redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setText(e.target.value)); // Met à jour le texte dans Redux
  };

  const handleClear = () => {
    dispatch(clearText()); // Efface le texte
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Écrivez une tâche..."
      />
      <button onClick={handleClear}>Effacer</button>
    </div>
  );
};

export default TaskInput;
