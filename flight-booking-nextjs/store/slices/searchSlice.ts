import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: Date | null;
  returnDate: Date | null;
  adult: number;
  children: number;
  infants: number;
  max: number;
  travelClass: string;
  selectedFromCity: string;
  selectedToCity: string;
  tripType: string;
  results: any[];
  resultRowReturn: any[];
  searchResults: any[];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  resultRow: any[];
  flightOffersPricing: any[];
  returnFlightOffersPricing: any[];
  loading: boolean;
  dictionaries: {
    locations: Record<string, { cityCode: string; countryCode: string }>;
    aircraft: Record<string, string>;
    currencies: Record<string, string>;
    carriers: Record<string, string>;
  };
}

const initialState: SearchState = {
  originLocationCode: '',
  destinationLocationCode: '',
  departureDate: null,
  returnDate: null,
  adult: 0,
  children: 0,
  infants: 0,
  max: 250,
  travelClass: '',
  selectedFromCity: '',
  selectedToCity: '',
  tripType: '',
  results: [],
  searchResults: [],
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 0,
  resultRow: [],
  resultRowReturn: [],
  flightOffersPricing: [],
  returnFlightOffersPricing: [],
  loading: false,
  dictionaries: {
    locations: {},
    aircraft: {},
    currencies: {},
    carriers: {}
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setSearchParams(state, action: PayloadAction<Omit<SearchState, 'results' | 'searchResults' | 'totalItems'>>) {
      return { ...state, ...action.payload };
    },
    setSearchResults(state, action: PayloadAction<any[]>) {
      state.results = action.payload;
      state.totalItems = action.payload ? action.payload.length : 0;
      state.currentPage = 1; // Reset to the first page on new search
      // state.loading = false;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    // setItemsPerPage(state, action: PayloadAction<number>) {
    //   state.itemsPerPage = action.payload;
    // },
    setFilteredItems(state, action: PayloadAction<any[]>) {
      state.searchResults = action.payload;
      // state.totalItems = action.payload ? action.payload.length : 0;
      state.currentPage = 1; // Reset to the first page on new search
      state.loading = false;
    },
    setDictionaries(state, action: PayloadAction<{
      locations: Record<string, { cityCode: string; countryCode: string }>,
      aircraft: Record<string, string>,
      currencies: Record<string, string>,
      carriers: Record<string, string>
    }>) {
      state.dictionaries = action.payload;
    },
    setResultRow(state, action: PayloadAction<any[]>) {
      state.resultRow = action.payload;
    },
    setResultRowReturn(state, action: PayloadAction<any[]>) {
      state.resultRowReturn = action.payload;
    },
    setFlightOffersPricing(state, action: PayloadAction<any[]>) {
      state.flightOffersPricing = action.payload;
    },

    setReturnFlightOffersPricing(state, action: PayloadAction<any[]>) {
      state.returnFlightOffersPricing = action.payload;
    },
  },
});

export const {
  setSearchParams,
  setSearchResults,
  setCurrentPage,
  // setItemsPerPage,
  setFilteredItems,
  setResultRow,
  setLoading,
  setDictionaries,
  setFlightOffersPricing,
  setReturnFlightOffersPricing,
  setResultRowReturn,
} = searchSlice.actions;
export default searchSlice.reducer;
