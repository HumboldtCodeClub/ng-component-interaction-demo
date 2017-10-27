import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-top',
  templateUrl: './tree-top.component.html'
})
export class TreeTopComponent {
  // This is our root component data model, it's just a string.
  topModel: string = "Trickle Down";
}
