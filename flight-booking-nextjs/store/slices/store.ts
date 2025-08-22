// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '@/store/slices/searchSlice';
import travellerReducer from '@/store/slices/travellerSlice';
import seatMapSliceReducer from '@/store/slices/seatMapSlice';
import messageSlice from '@/store/slices/messages';
import orderDetailSlice from '@/store/slices/orderSlice';
import currencySlice from '@/store/slices/currencySlice';
import totalAmountSlice from '@/store/slices/totalAmountSlice';
import travellersSlice from '@/store/slices/travellersSlice';
import selectedTravelersSlice from '@/store/slices/selectedTravelersSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    traveller: travellerReducer,
    seatmap: seatMapSliceReducer,
    message: messageSlice,
    orderDetails: orderDetailSlice,
    currency: currencySlice,
    totalAmount: totalAmountSlice,
    travellers: travellersSlice,
    selectedTravelers: selectedTravelersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
