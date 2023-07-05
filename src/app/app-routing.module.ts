import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RecordsSectionComponent } from './components/records/records-section/records-section.component';
import { FriendsSectionComponent } from './components/friends/friends-section/friends-section.component';
import { FriendsAddComponent } from './components/friends/friends-add/friends-add.component';


const routes: Routes =
  [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'records', component: RecordsSectionComponent},
    { path: 'friends', component: FriendsSectionComponent},
    { path: 'friends-add',component: FriendsAddComponent},
    { path: 'account', component: AccountComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
