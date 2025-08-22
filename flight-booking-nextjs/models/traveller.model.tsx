import { format } from "date-fns"; // or use your preferred method

export default class SearchModel {
  public user_id: number;
  public traveller_id: number;
  public passenger_type: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public phone_code: string;
  public phone: string;
  public gender: string;
  public dob_date: string;
  public document_number: string;
  public document_type: string;
  public issuance_location: number;
  public issuance_date: string;
  public expiry_date: string;
  public company_name: string;
  public birth_place: string;
  public address: string;
  public postal_code : string;

  constructor(json: any) {
    this.user_id = json.user_id || null;
    this.traveller_id = json.traveller_id || null;
    this.passenger_type = json.passenger_type || "";
    this.first_name = json.first_name || "";
    this.last_name = json.last_name || "";
    this.email = json.email || "";
    this.phone_code = json.phone_code || "";
    this.phone = json.phone || "";
    this.gender = json.gender || "";
    this.dob_date = json.dob_date
      ? format(new Date(json.dob_date), "yyyy-MM-dd")
      : "";
    this.issuance_date = json.issuance_date
      ? format(new Date(json.issuance_date), "yyyy-MM-dd")
      : "";
    this.document_number = json.document_number || "";
    this.document_type = json.document_type || "";

    this.expiry_date = json.expiry_date
      ? format(new Date(json.expiry_date), "yyyy-MM-dd")
      : "";

    this.issuance_location = json.issuance_location || 0;
    this.company_name = json.company_name || "";
    this.birth_place = json.birth_place || "";
    this.address = json.address || "";
    this.postal_code = json.postal_code || "";
  }
}
