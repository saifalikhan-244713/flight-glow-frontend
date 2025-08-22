export default class LoginModel {
  public email: string = "";
  public password: string = "";
  // public siteKey: string="";
  constructor(json: any) {
    if (json) {
      this.email = json.email ?? "";
      this.password = json.password ?? "";
      // this.siteKey = json.siteKey ?? '';
    }
  }
}
