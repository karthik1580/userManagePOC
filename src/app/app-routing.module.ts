import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardAdminGuard } from './auth/authguardAdmin.guard';
import { AuthguarPmoGuard } from './auth/authguardPmo.guard';
import { AuthguardUserGuard } from './auth/authguardUser.guard';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './users/admin/admin.component';
import { PmoComponent } from './users/pmo/pmo.component';
import { CreateIncidentComponent } from './pages/create-incident/create-incident.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'register', component: SignupComponent
  },{
    path: 'signin', component: SingInComponent
  },{
    path: 'user', component: UserComponent, canActivate: [AuthguardUserGuard]
  },{
    path: 'admin', component: AdminComponent, canActivate: [AuthguardAdminGuard]
  },{
    path: 'pmo', component: PmoComponent, canActivate: [AuthguarPmoGuard]
  },{
    path: 'dashboard', component: DashboardComponent
  },{
    path: 'incident', component: CreateIncidentComponent
  },{
    path: 'resetPwd', component: ResetPasswordComponent
  },{
    path: '', redirectTo:'/signin', pathMatch: 'full'
  }
];
//, canActivate: [AuthguardGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
