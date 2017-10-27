import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { Router }          from '@angular/router';
import { AppComponent }    from './app.component';
import { DownModule }      from './down/down.module';
import { UpModule }        from './up/up.module';
import { UpAndDownModule } from './up-and-down/up-and-down.module';
import { routing }         from './routing.module';

@NgModule({
  imports: [
    BrowserModule,
    DownModule,
    UpModule,
    UpAndDownModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
