
//#region Pages
import { HeaderComponent } from '../layout/header/header.component';
import { MainSidebarComponent } from '../layout/main-sidebar/main-sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from '../pages/main/main.component';

import { LoginComponent } from './../pages/login/login.component';

//#endregion

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatar';


//#region Directives
// import { AutoFocusDirective } from './../shared/directives/auto-focus.directive';
//#endregion

import { NotificationProvider } from './../services/notification/notification.provider';
import { MailProvider } from './../services/abstract/mail.provider';
import { AuthProvider } from './../services/auth/auth.provider';
import { AuthService } from './../services/auth/auth.service';
import { StorageService } from './../services/storage/storage.service';
import { AuthGuard } from './../services/auth/auth.guard';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    AvatarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSidebarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ],
  providers: [

    { provide: AuthService, useClass: AuthService },
    { provide: AuthProvider, useClass: AuthProvider },
    { provide: MailProvider, useClass: MailProvider },
    { provide: NotificationProvider, useClass: NotificationProvider },
    { provide: StorageService, useClass: StorageService },
    { provide: AuthGuard, useClass: AuthGuard },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
