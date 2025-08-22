
const isProduction = process.env.ENV_MODE === "production";

const serverPath = isProduction
  ? process.env.NEXTAUTH_URL_DEV
  : process.env.NEXTAUTH_URL_PROD;

export default class Api {
  //#region Global api routes
  public static GlobalApiRoute = serverPath as string;

  //#region Authentication
  public static Login = `${this.GlobalApiRoute}/login`;
  public static SignUp = `${this.GlobalApiRoute}/registration`;
  public static ForgotPassword = `${this.GlobalApiRoute}/forgot-password`;
  public static ChangePassword = `${this.GlobalApiRoute}/change-password`;
  //#endregion

  public static SearchLocation = `${this.GlobalApiRoute}/get/location/db`;
  public static SearchFlightOffersStatic = `${this.GlobalApiRoute}/flight-offers-static`;
  public static SearchFlightOffersLive = `${this.GlobalApiRoute}/flight-offers`;

  public static getSeatMap = `${this.GlobalApiRoute}/seat-maps`;
  public static getOfferFinalPrice = `${this.GlobalApiRoute}/shopping/flight-offers/pricing`;

  //#Start Traveler routes
  public static SaveTraveller = `${this.GlobalApiRoute}/save-traveller`;
  public static GetTraveller = `${this.GlobalApiRoute}/get-traveller`;
  public static DeleteTraveller = `${this.GlobalApiRoute}/delete-traveller`;
  public static GetContactDetails = `${this.GlobalApiRoute}/get-contacts`;
  //#End Traveler routes

  //#Start Order routes
  public static CreateFlightOrder = `${this.GlobalApiRoute}/booking/flight-orders`;
  public static GetFlightOrder = `${this.GlobalApiRoute}/get/flight-orders`;
  public static GetFlightOrderDetail = `${this.GlobalApiRoute}/get/flight-orders/detail`;
  //#End Order routes
}
