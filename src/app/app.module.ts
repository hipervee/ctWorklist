import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ToastrModule, GlobalConfig } from 'ngx-toastr';
import { LoaderComponent } from './widgets/loader/loader.component';

const asynButtonConfig = {
  spinnerTpl: '<span class="btn-spinner"></span>',
  disableBtn: true,
  btnLoadingClass: 'is-loading',
  handleCurrentBtnOnly: false,
};

const toastConfig: Partial<GlobalConfig> = {
  timeOut: 3000,
  positionClass: 'toast-top-center',
  preventDuplicates: true,
  tapToDismiss: true,
  closeButton: true,
  progressAnimation: 'decreasing',
  progressBar: true
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
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    Angular2PromiseButtonModule.forRoot(asynButtonConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(toastConfig),
  ],
  providers: [PriorityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
