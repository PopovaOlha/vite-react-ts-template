import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types/interfaces';

export interface SelectedState {
  selectedItems: Character[];
}

const initialState: SelectedState = {
  selectedItems: [],
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    toggleSelectItem: (state, action: PayloadAction<Character>) => {
      const itemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.selectedItems.splice(itemIndex, 1);
      } else {
        state.selectedItems.push(action.payload);
      }
    },
    setSelectedItems: (state, action: PayloadAction<Character[]>) => {
      state.selectedItems = action.payload;
    },
  },
});

export const { toggleSelectItem, setSelectedItems } = selectedSlice.actions;
export default selectedSlice.reducer;
