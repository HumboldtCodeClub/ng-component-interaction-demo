import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UpAndDownComponent } from './up-and-down.component';
import { TreeTopComponent } from './tree-top/tree-top.component';
import { BranchComponent } from './branch/branch.component';
import { LeafComponent } from './leaf/leaf.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    UpAndDownComponent,
    TreeTopComponent,
    BranchComponent, 
    LeafComponent
  ],
  exports: [
    UpAndDownComponent
  ]
})
export class UpAndDownModule { }
