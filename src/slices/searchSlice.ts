import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, SearchState } from '../types/interfaces';

const initialState: SearchState = {
  searchResults: [],
  searchTerm: '',
  isLoading: false,
  currentPage: 1,
  characterDetails: null,
  resultsByPage: {},
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(
      state,
      action: PayloadAction<{ page: number; results: Character[] }>,
    ) {
      const { page, results } = action.payload;
      state.resultsByPage[page] = results;
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
    setCharacterDetails(state, action: PayloadAction<Character | null>) {
      state.characterDetails = action.payload;
    },
  },
});

export const {
  setSearchResults,
  setSearchTerm,
  setIsLoading,
  setCurrentPage,
  setCharacterDetails,
} = searchSlice.actions;

export default searchSlice.reducer;
