import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DownComponent } from './down.component';
import { TreeTopComponent } from './tree-top/tree-top.component';
import { BranchComponent } from './branch/branch.component';
import { LeafComponent } from './leaf/leaf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DownComponent,
    TreeTopComponent,
    BranchComponent, 
    LeafComponent
  ],
  exports: [
    DownComponent
  ]
})
export class DownModule { }
