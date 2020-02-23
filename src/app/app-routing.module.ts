import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SingInComponent } from './users/sing-in/sing-in.component';
import { SignupComponent } from './users/signup/signup.component';
import { Z_FULL_FLUSH } from 'zlib';


const routes: Routes = [
  {
    path: 'signup', component: UsersComponent, children: [
      {path: '', component: SignupComponent}
    ]
  },
  {
    path: 'signin', component: UsersComponent, children: [
      {path: '', component: SingInComponent}
    ]
  },
  {
    path: '', redirectTo:'/signup', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
