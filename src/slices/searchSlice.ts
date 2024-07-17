import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, SearchState } from '../types/interfaces';

const initialState: SearchState = {
  searchResults: [],
  searchTerm: '',
  isLoading: false,
  currentPage: 1,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<Character[]>) {
      state.searchResults = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchResults, setSearchTerm, setIsLoading, setCurrentPage } =
  searchSlice.actions;

export default searchSlice.reducer;
