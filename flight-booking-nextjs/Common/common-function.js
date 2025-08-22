// src/api.js
import SearchController from "@/controllers/search.controller";

export const fetchCityLocations = async (query) => {
    try {
      const response = await SearchController.getLocations(query);
  
      if (response.data.code === 200 && response.data.errors.length === 0) {
        return response.data.data.data;
      } else {
        throw new Error("Failed to fetch city locations");
      }
    } catch (error) {
      console.error("Failed to fetch city locations:", error);
      throw new Error("Failed to fetch city locations");
    }
  };

  
  