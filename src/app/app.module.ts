
//#region Pages
import { HeaderComponent } from '../layout/header/header.component';
import { MainSidebarComponent } from '../layout/main-sidebar/main-sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from '../pages/main/main.component';

import { LoginComponent } from './../pages/login/login.component';
import { AdminComponent } from './../pages/admin/admin.component';

//#endregion
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatar';
import { NgxLoadingModule } from 'ngx-loading';


//#region Directives
// import { AutoFocusDirective } from './../shared/directives/auto-focus.directive';
//#endregion


import { MailProvider } from './../services/abstract/mail.provider';
import { AuthProvider } from './../services/auth/auth.provider';
import { AppProvider } from './../services/application/app.provider';

import { AuthService } from './../services/auth/auth.service';
import { StorageService } from './../services/storage/storage.service';

import { UserProvider } from './../services/users/user.provider';
import { UserService } from './../services/users/user.service';

import { AuthGuard } from '../services/guards/auth.guard';
import { AdminGuard } from './../services/guards/admin.guard';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    AvatarModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSidebarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    AdminComponent
  ],
  providers: [

    { provide: AuthService, useClass: AuthService },
    { provide: UserService, useClass: UserService },
    { provide: UserProvider, useClass: UserProvider },
    { provide: AuthProvider, useClass: AuthProvider },
    { provide: MailProvider, useClass: MailProvider },
    { provide: AppProvider, useClass: AppProvider },
    { provide: StorageService, useClass: StorageService },
    { provide: AuthGuard, useClass: AuthGuard },
    { provide: AdminGuard, useClass: AdminGuard }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
