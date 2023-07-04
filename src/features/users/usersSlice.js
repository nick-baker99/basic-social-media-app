import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Marshall Mathers' },
  { id: '1', name: 'Benj Button' },
  { id: '2', name: 'Ken Adams' }
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;