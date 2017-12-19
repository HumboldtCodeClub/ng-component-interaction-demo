import { Component, OnInit }   from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * The event parent component recieves data updates from
 * its child components via events.
 */
@Component({
  selector:    'hcc-parent',
  templateUrl: './event-parent.component.html'
})
export class EventParentComponent implements OnInit {

  /** 
   * The parent model.
   */
  parentModel: string = 'parent';

  /** 
   * Form control hooked to the template.
   */
  parentControl = new FormControl();

  /** 
   * Track updates recieved from children components.
   */
  updatesOnEvents: number = 0;

  /** 
   * On init set control value and subscribe to control changes.
   */
  ngOnInit() {
    // Set the input control to the model value
    this.parentControl.patchValue(this.parentModel);
    // Subscribe to changes in the input control
    this.parentControl.valueChanges.subscribe(value => {
      // Input control changed, so update the model value.
      this.parentModel = this.parentControl.value;
    });
  }

  /** 
   * Listen for child events.
   */
  childEventDetected(event) {
    // Child updated its model, so update this model to match
    this.parentModel = event;
    // Update the form control to match the model change
    this.parentControl.patchValue(this.parentModel);
    this.updatesOnEvents += 1;
  }
}
