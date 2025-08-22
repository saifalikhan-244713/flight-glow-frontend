import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SeatMapState {
  seatMapResult: any[];
  selectedSeats: any[];
  returnSelectedSeats: any[];
  departureSeats: any[];
  returnSeats: any[];
  returnSeatMapResult: any[];
}

const initialState: SeatMapState = {
  seatMapResult: [],
  returnSeatMapResult: [],
  selectedSeats: [],
  returnSeats: [],
  departureSeats: [],

  returnSelectedSeats: [],
};

const seatMapSlice = createSlice({
  name: 'seatmap',
  initialState,
  reducers: {
    setSeatMapResults(state, action: PayloadAction<any[]>) {
      state.seatMapResult = action.payload;
    },
    setReturnSeatMapResults(state, action: PayloadAction<any[]>) {
      state.returnSeatMapResult = action.payload;
    },
    setSelectedSeats(state, action: PayloadAction<any[]>) {
      state.selectedSeats = action.payload;
    },
    setDepartureSeats(state, action: PayloadAction<any[]>) {
      state.departureSeats = action.payload;
    },
    setReturnSeats(state, action: PayloadAction<any[]>) {
      state.returnSeats = action.payload;
    },
    setReturnSelectedSeats(state, action: PayloadAction<any[]>) {
      state.returnSelectedSeats = action.payload;
    },
  },
});

export const {
  setSeatMapResults,
  setSelectedSeats,
  setReturnSelectedSeats,
  setDepartureSeats,
  setReturnSeats,
  setReturnSeatMapResults,
} = seatMapSlice.actions;
export default seatMapSlice.reducer;
