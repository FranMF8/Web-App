import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: string = 'https://localhost:7117/';

  constructor(private loginService: LoginService) {

   }

  ngOnInit(): void {
      this.loginService.getUser().then(console.log);
  }
}
