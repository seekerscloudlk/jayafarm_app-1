import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { 
    path: 'members', 
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
//   { path: '', loadChildren: './members/inc/add-order/add-order.module#AddOrderPageModule' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }