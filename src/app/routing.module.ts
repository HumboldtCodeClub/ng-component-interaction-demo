import { RouterModule, Routes } from '@angular/router';

import { InputBindingDemoComponent } from './input-binding-demo/input-binding-demo.component';
import { EventDemoComponent }          from './event-demo/event-demo.component';
import { BindingAndEventsDemoComponent }   from './binding-and-events-demo/binding-and-events-demo.component';

/**
 * Routing module
 * Routes to different component interaction demos.
 */

const routes: Routes = [
  { path: 'input-binding', component: InputBindingDemoComponent },
  { path: 'events',   component: EventDemoComponent },
  { path: 'binding-and-events', component: BindingAndEventsDemoComponent },
  { path: '**',   redirectTo: 'input-binding' }
];

export const routing = RouterModule.forRoot(routes);