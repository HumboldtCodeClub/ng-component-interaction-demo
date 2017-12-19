import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BindingAndEventsDemoComponent } from './binding-and-events-demo.component';
import { BindingAndEventsParentComponent }   from './parent/binding-and-events-parent.component';
import { BindingAndEventsChildComponent }    from './child/binding-and-events-child.component';
import { BindingAndEventsGrandchildComponent }      from './grandchild/binding-and-events-grandchild.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BindingAndEventsDemoComponent,
    BindingAndEventsParentComponent,
    BindingAndEventsChildComponent, 
    BindingAndEventsGrandchildComponent
  ],
  exports: [
    BindingAndEventsDemoComponent
  ]
})
export class BindingAndEventsDemoModule { }
