import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';

export function CardTable() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);

  return (
    <div id="card-table" className=" w-1/5 border-red-500">
      {cards.map((card) => (
        <Card key={card.id} card={card} className="bg-white p-4 rounded shadow" />
      ))}
    </div>
  );
}