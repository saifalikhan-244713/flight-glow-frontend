import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface priceState {
  totalAmount: number;
}

const initialState: priceState = {
  totalAmount: 0,
};

const totalAmountSlice = createSlice({
  name: 'totalAmount',
  initialState,
  reducers: {
    setTotalAmount(state, action: PayloadAction<number>) {
      state.totalAmount = action.payload;
    },
  },
});

export const { setTotalAmount } = totalAmountSlice.actions;
export default totalAmountSlice.reducer;
