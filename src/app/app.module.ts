import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { RecordsListComponent } from './components/records/records-list/records-list.component';
import { RecordsViewComponent } from './components/records/records-view/records-view.component';
import { FriendsListComponent } from './components/friends/friends-list/friends-list.component';
import { FriendsViewComponent } from './components/friends/friends-view/friends-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AccountComponent,
    HomeComponent,
    RecordsViewComponent,
    RecordsListComponent,
    FriendsListComponent,
    FriendsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
