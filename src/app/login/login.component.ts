import { User } from '../Models/user.model';
import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Services/login.service';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public requestForm!: FormGroup;
  public errorMessage!: string;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.requestForm = this.createMyForm();
      this.loginService.getUser().subscribe( response => {
        console.log(response)
      });
  }

  public Login(newUser: any): void {
    this.loginService.logUser(newUser).subscribe( response => {
      console.log(response)
    }, (error) => {
      this.errorMessage = error.message;
    })
   }

  private createMyForm(): FormGroup {
    return this.fb.group({
      email: [],
      password: []
    })
  }

  public submitForm() {
    console.log(this.requestForm.value);
    this.Login(this.requestForm.value);
  }
}
