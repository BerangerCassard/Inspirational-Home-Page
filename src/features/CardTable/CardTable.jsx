import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';

export function CardTable() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);

  return (
    <div id="card-table" className=" border-red-500 flex flex-row gap-4 max-w-full max-h-full overflow-y-auto flex-wrap">
      {cards.map((card) => (
        <Card key={card.id} card={card} className="bg-white p-4 rounded shadow" />
      ))}
    </div>
  );
}