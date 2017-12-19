import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventDemoComponent }         from './event-demo.component';
import { EventParentComponent }    from './parent/event-parent.component';
import { EventChildComponent }      from './child/event-child.component';
import { EventGrandchildComponent } from './grandchild/event-grandchild.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventDemoComponent,
    EventParentComponent,
    EventChildComponent, 
    EventGrandchildComponent
  ],
  exports: [
    EventDemoComponent
  ]
})
export class EventDemoModule { }
