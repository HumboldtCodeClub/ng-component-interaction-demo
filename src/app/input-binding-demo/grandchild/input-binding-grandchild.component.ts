import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * The grandchild component recieves data updates from its
 * parent component via input binding.
 */

@Component({
  selector: 'hcc-grandchild',
  templateUrl: './input-binding-grandchild.component.html'
})
export class InputBindingGrandchildComponent implements OnChanges {

  /** 
   * The grandchild model, bound to its parent with the input decorator
   */
  @Input() grandchildModel: string = "grandchild";

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
