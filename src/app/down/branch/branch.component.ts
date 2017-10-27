import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html'
})
export class BranchComponent implements OnChanges {

  // The branch model, bound to its parent with the input decorator
  @Input() branchModel: string = "branch";
  parentUpdateCount: number = 0;

  // We can intercept changes passed down by the parent with OnChanges.
  ngOnChanges() {
    this.parentUpdateCount += 1;
  }
}
