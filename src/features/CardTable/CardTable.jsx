import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from './Card';

export function CardTable() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}