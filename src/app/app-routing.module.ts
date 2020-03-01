import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './users/admin/admin.component';
import { PmoComponent } from './users/pmo/pmo.component';


const routes: Routes = [
  {
    path: 'register', component: SignupComponent
  },{
    path: 'signin', component: SingInComponent
  },{
    path: 'user', component: UserComponent, canActivate: [AuthguardGuard]
  },{
    path: 'admin', component: AdminComponent, canActivate: [AuthguardGuard]
  },{
    path: 'pmo', component: PmoComponent, canActivate: [AuthguardGuard]
  },{
    path: 'dashboard', component: DashboardComponent
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
