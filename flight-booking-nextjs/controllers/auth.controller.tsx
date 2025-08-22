import Api from "../Common/Api";
import { AxiosResponse } from "axios";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import SignUpModel from "../models/signUp.model";
import LoginModel from "../models/login.model";

/**
 * Auth controller .
 */
export default class AuthController {
  /**
   * SignIn user.
   * @param loginData Login data model.
   * @returns auth token.
   */
  public static async Login(loginData: LoginModel): Promise<any> {
    //Call API

    const response = await axios.post(Api.Login, loginData);
    return response.data;
  }

  /**
   * SignUp new user.
   * @param signUpData signUp data model.
   * @returns signUp data.
   */
  public static async SignUp(signUpData: SignUpModel): Promise<any> {
    //Call API
    const response = await axios.post(Api.SignUp, signUpData);

    return response;
  }
}
