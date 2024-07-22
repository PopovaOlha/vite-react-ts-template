import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './slices/searchApiSlices';
import searchReducer from './slices/searchSlice';
import selectedReducer from './slices/selectedSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    search: searchReducer,
    selected: selectedReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
