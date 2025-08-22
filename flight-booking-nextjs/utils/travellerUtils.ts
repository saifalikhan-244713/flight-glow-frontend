// travellerUtils.ts
import TravellerController from "@/controllers/traveller.controller";

export const fetchTravellerResults = async (session: any) => {
  try {
    let user_id = "";
    if (session?.user && "id" in session.user) {
      user_id = (session.user as { id: string }).id;
    }

    const response = await TravellerController.getTraveller(user_id);
    if (response && response.data && response.data.data) {
      return response.data.data;
    } else {
      console.error("Unexpected response structure:", response);
      return [];
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export const fetchContactResults = async (session:any) => {
    try {
      let user_id = "";
      if (session?.user && "id" in session.user) {
        user_id = (session.user as { id: string }).id;
      }
      const response = await TravellerController.getContact(user_id);
      if (response && response.data && response.data.data) {
        return response.data.data;
      } else {
        console.error("Unexpected response structure:", response);
        return [];
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };
