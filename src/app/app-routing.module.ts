import { AuthguardGuard } from './auth/authguard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UsersComponent } from './users/users.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PmoComponent } from './pmo/pmo.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: 'register', component: SignupComponent
  },{
    path: 'signin', component: SingInComponent
  },{
    path: 'userdetail', component: UserDetailComponent
  },{
    path: 'admin', component: AdminComponent
  },{
    path: 'pmo', component: PmoComponent
  },{
    path: '', redirectTo:'/register', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
