import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html'
})
export class LeafComponent implements OnChanges {
  // The leaf model, bound to its parent with the input decorator
  @Input() leafModel: string = "leaf";
  parentUpdateCount: number = 0;

  // We can intercept changes passed down by the parent with OnChanges.
  ngOnChanges() {
    this.parentUpdateCount += 1;
  }
}
