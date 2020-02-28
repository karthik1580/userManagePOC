import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './auth/authguard.guard';


const routes: Routes = [
  {
    path: 'register', component: SignupComponent
  },{
    path: 'signin', component: SingInComponent
  },{
    path: 'userdetail', component: UserDetailComponent
  },{
    path: 'dashboard', component: DashboardComponent
  },{
    path: '', redirectTo:'/userdetail', pathMatch: 'full'
  }
];
//, canActivate: [AuthguardGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
