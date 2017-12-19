import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * The Parent component for the binding and events demo.
 * 
 * This model passes data to its child via input binding and recieves data
 * updates from its children through events.
 */
@Component({
  selector: 'hcc-parent',
  templateUrl: './binding-and-events-parent.component.html'
})
export class BindingAndEventsParentComponent implements OnInit {

  /** 
   * The parent component data model. 
   */
  parentModel: string = "Parent Component";

  /**
   * Hook to the template form control.
   */
  parentControl = new FormControl();

  /**
   * Counter for tracking updates from children.
   */
  updatesOnEvents: number = 0;
  
  /**
   * On init set the input value and subscribe to changes.
   */
  ngOnInit() {
    // Set the control value to the model value
    this.parentControl.patchValue(this.parentModel);
    // Subscribe to control updates
    this.parentControl.valueChanges.subscribe(value => {
      // Input value changed, update the model
      this.parentModel = this.parentControl.value;
    });
  }

  /**
   * Listen for child events
   */
  childEventDetected(event) {
    // Child updated its model, so update this model to match
    this.parentModel = event;
    // Update the form control to match the model change
    this.parentControl.patchValue(this.parentModel);
    this.updatesOnEvents += 1;
  }
}
