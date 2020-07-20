//#region Pages
import { HeaderComponent } from '../layout/header/header.component';
import { MainSidebarComponent } from '../layout/main-sidebar/main-sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from '../pages/main/main.component';
//#endregion

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../modules/user/services/auth/guards/auth.guard';

import { SharedModule } from './../shared/shared.module';


//#region Directives
import { AutoFocusDirective } from './../shared/directives/auto-focus.directive';

//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSidebarComponent,
    FooterComponent,
    MainComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: AuthGuard, useClass: AuthGuard }
  ],

  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
