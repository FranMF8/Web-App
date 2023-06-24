import { User } from "../Models/user.model"
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
}
)

export class LoginService {

  url: string = 'https://localhost:7117/api/';
  constructor(private http : HttpClient) {

  }

  getUser() {
    return this.http.get(this.url + "login/list");
  }

  registerUser(user: User) {
    return this.http.post(this.url + "Auth/register", user);
  }

  logUser(user: User) {
    return this.http.post(this.url + "Auth/login", user);
  }
}
