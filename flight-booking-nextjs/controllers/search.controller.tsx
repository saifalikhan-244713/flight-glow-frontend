import Api from '../Common/Api';
import axios from 'axios';
import SearchModel from '@/models/search.model';
import { setFlightData } from '@/utils/flightData';

/**
 * Search controller.
 */
export default class SearchController {
  /**
   * Get city locations.
   * @param keyword A search query string.
   * @returns Response location data.
   */
  public static async getLocations(keyword: string): Promise<any> {
    const url = `${Api.SearchLocation}?keyword=${encodeURIComponent(keyword)}`;
    // Call API with the constructed URL
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  }

  /**
   * Get SeatMap data.
   * @param dataParameter Data for the search model.
   * @returns Response SeatMap data.
   */
  public static async getSeatMaps(dataParameter: any): Promise<any> {
    try {
      const response = await axios.post(Api.getSeatMap, {
        data: dataParameter,
      });
      return response;
    } catch (error) {}
  }

  /**
   * Get SeatMap data.
   * @param dataParameter Data for the search model.
   * @returns Response SeatMap data.
   */
  public static async getOfferFinalPrice(
    dataParameter: any,
    chargeableSeatNumber: any,
  ): Promise<any> {
    try {
      const response = await axios.post(Api.getOfferFinalPrice, {
        data: {
          flightOffers: dataParameter,
          chargeableSeatNumber: chargeableSeatNumber,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  public static async searchFlightOfferStatic(
    SearchModelData: SearchModel,
  ): Promise<any> {
    try {
      // Construct the URL using data from SearchModel
      const url = `${Api.SearchFlightOffersStatic}?originLocationCode=${SearchModelData.originLocationCode}&destinationLocationCode=${SearchModelData.destinationLocationCode}&departureDate=${SearchModelData.departureDate}&returnDate=${SearchModelData.returnDate}&adults=${SearchModelData.adults}&max=${SearchModelData.max}&travelClass=${SearchModelData.travelClass}`;
      // Call the API with the constructed URL
      const response = await axios.get(url);
      console.log('');
      return response.data;
    } catch (error) {
      console.error('Error searching flight offers:', error);
      throw error;
    }
  }

  public static async searchFlightOfferLive(
    SearchModelData: SearchModel,
  ): Promise<any> {
    try {
      const url = `${Api.SearchFlightOffersLive}?originLocationCode=${SearchModelData.originLocationCode}&destinationLocationCode=${SearchModelData.destinationLocationCode}&departureDate=${SearchModelData.departureDate}&returnDate=${SearchModelData.returnDate}&adults=${SearchModelData.adults}&max=${SearchModelData.max}&travelClass=${SearchModelData.travelClass}`;
      const response = await axios.get(url);
      setFlightData(response.data);
      return response.data;
    } catch (error) {
      console.error('Error searching flight offers:', error);
      throw error;
    }
  }
}
