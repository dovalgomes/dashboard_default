
//#region Pages
import { HeaderComponent } from '../layout/header/header.component';
import { MainSidebarComponent } from '../layout/main-sidebar/main-sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from '../pages/main/main.component';

import { LoginComponent } from './../pages/login/login.component';

//#endregion

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxMaskModule } from 'ngx-mask';
// import { FormsModule, } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationProvider } from './../services/notification/notification.provider';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SharedModule } from './../shared/shared.module';

//#region Directives
// import { AutoFocusDirective } from './../shared/directives/auto-focus.directive';
//#endregion

import { MailProvider } from './../services/abstract/mail.provider';
import { AuthProvider } from './../services/auth/auth.provider';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
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
    { provide: AuthProvider, useClass: AuthProvider },
    { provide: MailProvider, useClass: MailProvider },
    { provide: NotificationProvider, useClass: NotificationProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
