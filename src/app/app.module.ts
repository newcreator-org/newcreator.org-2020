import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLpModule } from '@deer-inc/ng-lp';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
