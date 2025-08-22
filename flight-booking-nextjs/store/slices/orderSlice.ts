// redux/slices/orderDetailSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  orderDetail: any[];
}

const initialState: FormState = {
  orderDetail: [],
};

const orderDetailSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    setOrderDetails(state, action: PayloadAction<any[]>) {
      state.orderDetail = action.payload;
    },
  },
});

export const { setOrderDetails } = orderDetailSlice.actions;
export default orderDetailSlice.reducer;
