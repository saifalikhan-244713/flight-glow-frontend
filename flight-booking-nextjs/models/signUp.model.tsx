export default class SignUpModel {
  public email: string = "";
  public name: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  public mobile: string = "";
  public last_name: string = "";

  constructor(json: any) {
    if (json) {
      this.name = json.name ? json.name : "";
      this.email = json.email ? json.email : "";
      this.mobile = json.mobile ? json.mobile : "";
      this.password = json.password ? json.password : "";
      this.confirmPassword = json.confirmPassword ? json.confirmPassword : "";
    }
  }
}
