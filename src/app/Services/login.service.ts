import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
}
)

export class LoginService {

  url: string = 'https://localhost:7117/';
  constructor(private http : HttpClient) {

  }

  getUser() {
    return this.http.get(this.url + "login/list").toPromise();
  }
}
