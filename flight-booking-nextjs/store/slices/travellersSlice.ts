// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Traveller {
//   id: string; // Changed from number to string to match API response `_id`
//   refID: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   mobile_number: string;
//   company_name?: string;
//   gst_number?: string;
//   gender: 'male' | 'female' | 'other';
//   nationality: string;
// }

// interface TravellersState {
//   travellers: Traveller[];
// }

// const initialState: TravellersState = {
//   travellers: [],
// };

// const travellersSlice = createSlice({
//   name: 'travellers',
//   initialState,
//   reducers: {
//     // Modify addTraveller to support adding multiple travellers
//     addTraveller: (state, action: PayloadAction<Traveller[]>) => {
//       state.travellers = [...state.travellers, ...action.payload];
//     },
//     removeTraveller: (state, action: PayloadAction<string>) => {
//       state.travellers = state.travellers.filter(
//         (traveller) => traveller.id !== action.payload,
//       );
//     },
//     updateTraveller: (state, action: PayloadAction<Traveller>) => {
//       const index = state.travellers.findIndex(
//         (traveller) => traveller.id === action.payload.id,
//       );
//       if (index !== -1) {
//         state.travellers[index] = action.payload;
//       }
//     },
//   },
// });

// export const { addTraveller, removeTraveller, updateTraveller } =
//   travellersSlice.actions;

// export default travellersSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Traveller {
  id: string;
  refID: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phone: string;
  companyName?: string;
  gstNumber?: string;
  gender: 'male' | 'female' | 'other';
  nationality: string;
  dateOfBirth: string;
  documentType: string;
  number: string;
  issueDate: string;
  expiryDate: string;
}

interface TravellersState {
  travellers: Traveller[];
}

const initialState: TravellersState = {
  travellers: [],
};

const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  reducers: {
    setTravellers: (state, action: PayloadAction<Traveller[]>) => {
      state.travellers = action.payload; // Directly set travelers
    },
    addTraveller: (state, action: PayloadAction<Traveller>) => {
      state.travellers.push(action.payload); // Add a single traveler
    },
    removeTraveller: (state, action: PayloadAction<string>) => {
      state.travellers = state.travellers.filter(
        (traveller) => traveller.id !== action.payload,
      );
    },
    updateTraveller: (state, action: PayloadAction<Traveller>) => {
      const index = state.travellers.findIndex(
        (traveller) => traveller.id === action.payload.id,
      );
      if (index !== -1) {
        state.travellers[index] = action.payload;
      }
    },
  },
});

export const { setTravellers, addTraveller, removeTraveller, updateTraveller } =
  travellersSlice.actions;

export default travellersSlice.reducer;
