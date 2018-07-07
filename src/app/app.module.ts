import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { NavComponent } from './nav/nav.component';
import { Angular2PromiseButtonModule } from 'angular2-promise-buttons/dist';
import { PriorityService } from './services/priority.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './widgets/loader/loader.component';
const asynButtonConfig = {
  // your custom config goes here
  spinnerTpl: '<span class="btn-spinner"></span>',
  // disable buttons when promise is pending
  disableBtn: true,
  // the class used to indicate a pending promise
  btnLoadingClass: 'is-loading',
  // only disable and show is-loading class for clicked button, 
  // even when they share the same promise
  handleCurrentBtnOnly: false,
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GridComponent,
    NavComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Angular2PromiseButtonModule.forRoot(asynButtonConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [PriorityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
