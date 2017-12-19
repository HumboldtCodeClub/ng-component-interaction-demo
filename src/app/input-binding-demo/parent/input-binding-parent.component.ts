import { Component } from '@angular/core';

/**
 * The parent component is the root source of data and 
 * child components are given access to that data via input binding.
 */
@Component({
  selector: 'hcc-parent',
  templateUrl: './input-binding-parent.component.html'
})
export class InputBindingParentComponent {

  /** 
   * This is our root component data model, it's just a string.
   */
  parentModel: string = "Parent";

}
