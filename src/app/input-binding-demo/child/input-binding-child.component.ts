import { Component, Input, OnChanges } from '@angular/core';

/**
 * THe child component recieves updates from the parent vai
 * the input binding.
 */
@Component({
  selector: 'hcc-child',
  templateUrl: './input-binding-child.component.html'
})
export class InputBindingChildComponent implements OnChanges {

  /**
   * The child model, bound to its parent with the input decorator.
   */ 
  @Input() childModel: string = "child";

  /**
   * number of times an update to the parent was applied to the child.
   */ 
  parentUpdateCount: number = 0;

  /**
   * We can intercept changes passed down by the parent with OnChanges.
   */ 
  ngOnChanges() {
    this.parentUpdateCount += 1;
  }

}
