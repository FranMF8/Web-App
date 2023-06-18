import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get(this.apiUrl + 'endpoint');
  }

  public postData(data: any) {
    return this.http.post(this.apiUrl + 'endpoint', data);
  }

  // Agrega más métodos según tus necesidades para realizar diferentes tipos de solicitudes HTTP (GET, POST, PUT, DELETE, etc.)
}
