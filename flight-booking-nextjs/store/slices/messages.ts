import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SeatMapState {
    successMessage: string,
    errorMessage: string,
  }

  const initialState: SeatMapState = {
    successMessage: "",
    errorMessage:"",
  };

  const messageSlice = createSlice({
    name:"message",
    initialState,
    reducers:{
        setSuccessMessage(state, action:PayloadAction<string>){
            state.successMessage = action.payload;
        },
        setErrorMessage(state, action:PayloadAction<string>){
            state.errorMessage = action.payload;
        }
    }
  });

export const { setSuccessMessage,setErrorMessage } = messageSlice.actions;
export default messageSlice.reducer;