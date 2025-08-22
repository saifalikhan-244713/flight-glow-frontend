import Api from "@/Common/Api";
import axios from "axios";
import TravellerModel from "@/models/traveller.model";

/**
 * Search controller.
 */
export default class SearchController {
  /**
   * Get city locations.
   * @param user_id .
   * @returns Response location data.
   */
  public static async getTraveller(user_id: string): Promise<any> {
    const url = `${Api.GetTraveller}?user_id=${encodeURIComponent(user_id)}`;
    // Call API with the constructed URL
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error("Error fetching Traveler:", error);
      throw error;
    }
  }

  /**
   * GetgetContact.
   * @param user_id .
   * @returns Response getContact data.
   */
  public static async getContact(user_id: string): Promise<any> {
    const url = `${Api.GetContactDetails}?user_id=${encodeURIComponent(
      user_id
    )}`;
    // Call API with the constructed URL
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error("Error fetching Traveler:", error);
      throw error;
    }
  }
  /**
   * Search flight offers.
   * @param travellerModel The TravellerModel object containing the data to be passed in the POST request.
   * @returns Response flight offers data.
   */
  public static async saveTraveller(
    travellerModel: TravellerModel
  ): Promise<any> {
    try {
      // Construct the URL using data from SearchModel
      const url = `${Api.SaveTraveller}`;

      // Call the API with the constructed URL and pass the travellerModel object as data
      const response = await axios.post(url, travellerModel);

      return response.data;
    } catch (error) {
      console.error("Error save traveller:", error);
      throw error;
    }
  }


  /**
 * Get city locations.
 * @param traveller_id .
 * @returns Response sucess message.
 */
  public static async deleteTraveller(traveller_id: number): Promise<any> {
    const url = `${Api.DeleteTraveller}`;    
    try {
      const response = await axios.post(url,{traveller_id : traveller_id} );
      return response;
    } catch (error) {
      console.error("Error delete Traveler:", error);
      throw error;
    }
  }
}
