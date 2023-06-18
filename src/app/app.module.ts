import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './navBar/navBar.component';
import { IonicModule } from '@ionic/angular';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent,
      HomeComponent,
      NavBarComponent,
      SignupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
