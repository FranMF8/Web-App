import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public requestForm!: FormGroup;
  errorMessage!: string;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.requestForm = this.createMyForm();
      this.loginService.getUser().subscribe( response => {
        console.log(response)
      });
  }

  public Register(newUser: any): void {
    this.loginService.registerUser(newUser).subscribe( response => {
      console.log(response)
    }, (error) => {
      this.errorMessage = error.message;
    })
   }

  private createMyForm(): FormGroup {
    return this.fb.group({
      email: [],
      password: [],
      controlPassword: []
    })
  }

  public submitForm() {
    console.log(this.requestForm.value);
    this.Register(this.requestForm.value);
  }
}
