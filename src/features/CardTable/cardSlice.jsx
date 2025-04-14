import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push({
        id: uuidv4(),
        content: action.payload || 'Contenu de la carte',
      });
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;

