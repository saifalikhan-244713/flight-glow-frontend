import { format } from "date-fns"; // or use your preferred method

export default class SearchModel {
  public originLocationCode: string;
  public destinationLocationCode: string;
  public departureDate: string;
  public returnDate: string;
  public adults: number;
  public max: number;
  public travelClass: string;

  constructor(json: any) {
    
    this.originLocationCode = json.originLocationCode || "";
    this.destinationLocationCode = json.destinationLocationCode || "";
    this.departureDate = json.departureDate
      ? format(new Date(json.departureDate), "yyyy-MM-dd")
      : "";
    this.returnDate = json.returnDate
      ? format(new Date(json.returnDate), "yyyy-MM-dd")
      : "";
    this.adults = json.adults || 1;
    this.max = json.max || 10;
    this.travelClass = json.travelClass || "";
  }
}
