interface SearchResult {
  id: string;
  airlinesFrom: {
    logo: string;
    businessName: string;
  };
  price: {
    currency: string;
    total: number;
  };
  itineraries: {
    segments: {
      departure: {
        at: Date;
      };
      arrival: {
        at: Date;
      };
      numberOfStops?: number;
    }[];
    duration: number;
  }[];
}

export default SearchResult;
