import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * The Event Grandchild component emits an event when its data changes
 * so that its parent component can be updated.
 */

@Component({
  selector: 'hcc-grandchild',
  templateUrl: './event-grandchild.component.html'
})
export class EventGrandchildComponent implements OnInit {
  /** 
   * The grandchild model
   */
  grandchildModel: string = "Grandchild";

  /** 
   * The event emitter used to communicate with the parent component
   */
  @Output() grandchildModelUpdated = new EventEmitter();

  /** 
   * The input control linked in the template
   */
  grandchildControl = new FormControl();

  /** 
   * On init set the control value and subscribe to changes in the control
   */
  ngOnInit() {
    // Set the control value to the model value
    this.grandchildControl.patchValue(this.grandchildModel);
    // Subscribe to changes in the input control
    this.grandchildControl.valueChanges.subscribe(value => {
      // When the input control value changes, update the model to match
      this.grandchildModel = this.grandchildControl.value;
      // When the input control value changes, notify our parent component
      this.grandchildModelUpdated.emit(this.grandchildModel);
    });
  }
}
