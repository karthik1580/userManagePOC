import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup/signup.component';
import { SingInComponent } from './users/sing-in/sing-in.component';
import { ErrorMsgComponent } from './reUsableComponent/error-msg/error-msg.component';
import { ErrorMsgWrapperComponent } from './reUsableComponent/error-msg-wrapper/error-msg-wrapper.component';
import { TosterComponent } from './reUsableComponent/toster/toster.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    SingInComponent,
    ErrorMsgComponent,
    ErrorMsgWrapperComponent,
    TosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
