import SearchController from '@/controllers/search.controller';
import SearchModel from '@/models/search.model';

export const fetchSearchResultsStatic = async (params: any) => {
  try {
    const searchModelData = new SearchModel(params);
    // Call API
    const response =
      await SearchController.searchFlightOfferStatic(searchModelData);

    if (response && response.data) {
      return response.data;
    } else {
      // Handle the case where the response is not as expected
      console.error('Unexpected response structure:', response);
      return [];
    }
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};

export const fetchSearchResultsLive = async (params: any) => {
  try {
    const searchModelData = new SearchModel(params);
    console.log('search-params-live', searchModelData);
    // Call API
    const response =
      await SearchController.searchFlightOfferLive(searchModelData);

    if (response && response.data) {
      return response.data;
    } else {
      // Handle the case where the response is not as expected
      console.error('Unexpected response structure:', response);
      return [];
    }
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};
