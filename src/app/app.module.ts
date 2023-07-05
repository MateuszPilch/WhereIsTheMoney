import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { RecordsAddComponent } from './components/records/records-add/records-add.component';
import { RecordsListComponent } from './components/records/records-list/records-list.component';
import { RecordsDetailsComponent } from './components/records/records-details/records-details.component';
import { RecordsSectionComponent } from './components/records/records-section/records-section.component';
import { FriendsAddComponent } from './components/friends/friends-add/friends-add.component';
import { FriendsListComponent } from './components/friends/friends-list/friends-list.component';
import { FriendsSectionComponent } from './components/friends/friends-section/friends-section.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AccountComponent,
    HomeComponent,
    RecordsSectionComponent,
    RecordsListComponent,
    FriendsListComponent,
    FriendsSectionComponent,
    FriendsAddComponent,
    RecordsAddComponent,
    RecordsDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
