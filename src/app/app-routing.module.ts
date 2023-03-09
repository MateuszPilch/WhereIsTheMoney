import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecordViewComponent } from './components/record/record-view/record-view.component';

const routes: Routes = 
  [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, children: 
      [
        { path: 'home', component: HomeComponent },
        { path: 'record', component: RecordViewComponent},
        { path: 'friends', component: RecordViewComponent},
        { path: 'account', component: AccountComponent },
      ]},  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
