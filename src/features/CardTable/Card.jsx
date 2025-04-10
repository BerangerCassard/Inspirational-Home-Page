import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export function Card() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold">{card.title || 'Sans titre'}</h2>
      <p className="text-gray-600">{card.content || 'Aucun contenu'}</p>
    </div>
  );
}

