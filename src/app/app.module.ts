import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { Router }          from '@angular/router';

import { AppComponent }               from './app.component';
import { InputBindingDemoModule }     from './input-binding-demo/input-binding-demo.module';
import { EventDemoModule }            from './event-demo/event-demo.module';
import { BindingAndEventsDemoModule } from './binding-and-events-demo/binding-and-events-demo.module';
import { routing }                    from './routing.module';

@NgModule({
  imports: [
    BrowserModule,
    InputBindingDemoModule,
    EventDemoModule,
    BindingAndEventsDemoModule,
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
