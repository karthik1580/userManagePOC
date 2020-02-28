import { AuthguardGuard } from './auth/authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { ErrorMsgComponent } from './reUsableComponent/error-msg/error-msg.component';
import { ErrorMsgWrapperComponent } from './reUsableComponent/error-msg-wrapper/error-msg-wrapper.component';
import { TosterComponent } from './reUsableComponent/toster/toster.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HeaderComponent } from './common/header/header.component';
import { UserService } from './shared/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SingInComponent,
    ErrorMsgComponent,
    ErrorMsgWrapperComponent,
    TosterComponent,
    UserDetailComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


//UserService