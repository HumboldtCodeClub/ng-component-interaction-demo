import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UpComponent }         from './up.component';
import { TreeTopComponent }    from './tree-top/tree-top.component';
import { BranchComponent }     from './branch/branch.component';
import { LeafComponent }       from './leaf/leaf.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    UpComponent,
    TreeTopComponent,
    BranchComponent, 
    LeafComponent
  ],
  exports: [
    UpComponent
  ]
})
export class UpModule { }
