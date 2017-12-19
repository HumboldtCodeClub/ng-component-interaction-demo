import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { InputBindingDemoComponent }       from './input-binding-demo.component';
import { InputBindingParentComponent }     from './parent/input-binding-parent.component';
import { InputBindingChildComponent }      from './child/input-binding-child.component';
import { InputBindingGrandchildComponent } from './grandchild/input-binding-grandchild.component';

/**
 * The input binding module demonstrates component interaction
 * where a parent component can pass information down to child 
 * components via input binding.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputBindingDemoComponent,
    InputBindingParentComponent,
    InputBindingChildComponent, 
    InputBindingGrandchildComponent
  ],
  exports: [
    InputBindingDemoComponent
  ]
})
export class InputBindingDemoModule { }
