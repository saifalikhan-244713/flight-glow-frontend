// redux/slices/travellerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  TravellerResults: any[];
  ContactResults: any[];
  EditTraveller: number;
  TravellerSelectedResults: any[];
}

const initialState: FormState = {
  EditTraveller: 0,
  TravellerResults: [],
  ContactResults: [],
  TravellerSelectedResults: [],
};

const travellerSlice = createSlice({
  name: 'traveller',
  initialState,
  reducers: {
    setTravellers(state, action: PayloadAction<any[]>) {
      state.TravellerResults = [...state.TravellerResults, ...action.payload];
    },
    setContactDetails(state, action: PayloadAction<any[]>) {
      state.ContactResults = action.payload;
    },
    setEditTraveller(state, action: PayloadAction<number>) {
      state.EditTraveller = action.payload;
    },
    setTravellerSelectedResults(state, action: PayloadAction<any[]>) {
      state.TravellerSelectedResults = action.payload;
    },
  },
});

export const {
  setTravellers,
  setContactDetails,
  setEditTraveller,
  setTravellerSelectedResults,
} = travellerSlice.actions;
export default travellerSlice.reducer;
