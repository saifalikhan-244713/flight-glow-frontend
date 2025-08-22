export default class OrderModel {
  public user_id: number;
  public data: any;

  constructor(json: any) {
    this.user_id = json.user_id || null;
    this.data = json.data || {
      type: json.type || "",
      flightOffers: json.flightOffers || null,
      travelers: json.travelers || null,
      remarks: json.remarks || null,
      ticketingAgreement: json.ticketingAgreement || null,
      contacts: json.contacts || null,
    };
  }
}
