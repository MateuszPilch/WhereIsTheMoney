import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecordsViewComponent } from './components/records/records-view/records-view.component';
import { FriendsViewComponent } from './components/friends/friends-view/friends-view.component';


const routes: Routes = 
  [
    { path: '', component: AppComponent, children: 
      [
        { path: 'home', component: HomeComponent },
        { path: 'records', component: RecordsViewComponent},
        { path: 'friends', component: FriendsViewComponent},
        { path: 'account', component: AccountComponent },
      ]},  
    { path: 'login', component: LoginComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
