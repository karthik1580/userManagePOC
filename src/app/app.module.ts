import { AuthguardGuard } from './auth/authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { ErrorMsgComponent } from './reUsableComponent/error-msg/error-msg.component';
import { ErrorMsgWrapperComponent } from './reUsableComponent/error-msg-wrapper/error-msg-wrapper.component';
import { TosterComponent } from './reUsableComponent/toster/toster.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HeaderComponent } from './common/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { PmoComponent } from './pmo/pmo.component';
import { UserService } from './shared/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    SingInComponent,
    ErrorMsgComponent,
    ErrorMsgWrapperComponent,
    TosterComponent,
    UserDetailComponent,
    HeaderComponent,
    AdminComponent,
    PmoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
