import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from './cardSlice';

function Card({ card }) {
  const dispatch = useDispatch();

  if (!card) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <p className="text-gray-600">{card.content || 'Aucun contenu'}</p>
      <button 
        onClick={() => dispatch(removeCard(card.id))}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Supprimer
      </button>
    </div>
  );
}

export default Card;