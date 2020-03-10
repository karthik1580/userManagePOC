import { AuthguardAdminGuard } from './auth/authguardAdmin.guard';
import { AuthguarPmoGuard } from './auth/authguardPmo.guard';
import { AuthguardUserGuard } from './auth/authguardUser.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { IncidentService } from './shared/incident.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './users/admin/admin.component';
import { PmoComponent } from './users/pmo/pmo.component';
import { UserComponent } from './users/user/user.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { CreateIncidentComponent } from './pages/create-incident/create-incident.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
//import { LoggedUserService } from './shared/logged-user.service';


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
    DashboardComponent,
    AdminComponent,
    PmoComponent,
    UserComponent,
    CreateIncidentComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, IncidentService , AuthguardAdminGuard, AuthguarPmoGuard, AuthguardUserGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


//UserService