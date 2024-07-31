import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { searchApi } from './slices/searchApiSlices';
import searchReducer from './slices/searchSlice';
import selectedReducer from './slices/selectedSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      search: searchReducer,
      selected: selectedReducer,
      [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(searchApi.middleware),
  });

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export const wrapper = createWrapper(makeStore);
