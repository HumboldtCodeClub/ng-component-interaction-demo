import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * The child component passes its model changes up to the parent component
 * by emitting an event.
 */

@Component({
  selector: 'hcc-child',
  templateUrl: './event-child.component.html'
})
export class EventChildComponent implements OnInit {
  /** 
   * The child model.
   */
  childModel: string = 'child';

  /** 
   * The event emitter used to communicate with parent component.
   */
  @Output() childModelUpdated = new EventEmitter();

  /** 
   * The input control in the template.
   */
  childControl = new FormControl();

  /** 
   * Track how many times a child has updated this component's data model.
   */
  updatesOnEvents: number = 0;

  /** 
   * OnInit we set our input control to match our model and then 
   * subscribe to any changes to the value in that control.
   */
  ngOnInit() {
    // Put the model value into the input control.
    this.childControl.patchValue(this.childModel);
    this.childControl.valueChanges.subscribe(value => {
      // The input control updated, so update the data model
      this.childModel = this.childControl.value;
      // The input control updated, so notify any parent controls that may be listening.
      this.childModelUpdated.emit(this.childModel);
    });
  }
  
  /** 
   * Handle events sent up the tree from our child components.
   */
  grandchildModelUpdated(event) {
    // Update this model with the child's model value
    this.childModel = event;
    // Update the input control with the new value
    this.childControl.patchValue(this.childModel);    
    this.updatesOnEvents += 1;
  }
}
