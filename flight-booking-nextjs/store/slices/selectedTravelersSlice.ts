import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  emailAddress: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  documentType: string;
  number: string;
  issuanceDate: string;
  expiryDate: string;
  issuanceLocation: string;
  companyName: string;
  gstNumber: string;
  birthPlace: string;
  address: string;
}

interface FormState {
  selectedTravelers: Traveler[];
}

const initialState: FormState = {
  selectedTravelers: [],
};

const selectedTravelerSlice = createSlice({
  name: 'selectedTravelerReducer',
  initialState,
  reducers: {
    setSelectedTravelers(state, action: PayloadAction<Traveler[]>) {
      state.selectedTravelers = [...state.selectedTravelers, ...action.payload];
    },
  },
});

export const { setSelectedTravelers } = selectedTravelerSlice.actions;
export default selectedTravelerSlice.reducer;
