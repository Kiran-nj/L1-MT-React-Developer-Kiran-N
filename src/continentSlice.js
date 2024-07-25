import { createSlice } from '@reduxjs/toolkit';

const initialState = 'All';

const continentSlice = createSlice({
  name: 'continent',
  initialState,
  reducers: {
    setContinent: (state, action) => action.payload,
  },
});

export const { setContinent } = continentSlice.actions;
export default continentSlice.reducer;
