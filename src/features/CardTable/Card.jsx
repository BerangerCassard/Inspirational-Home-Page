import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from './cardSlice';


function Card() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <p className="text-gray-600">{card.content || 'Aucun contenu'}</p>
      <button onClick={() => dispatch(removeCard(card.id))}>Supprimer</button>
    </div>
  );
}

export default Card;