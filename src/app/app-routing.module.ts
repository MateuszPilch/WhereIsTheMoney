import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = 
  [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, children: 
      [
        { path: 'home', component: HomeComponent },
        { path: 'account', component: AccountComponent },
      ]},  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
