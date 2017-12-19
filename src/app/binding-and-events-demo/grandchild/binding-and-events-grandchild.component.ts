import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Grandchild component for input binding and event demo
 * 
 * The grandchild component represents the last component in the component tree.
 * In this demo it will recieve input binding changes to its model from its parent component.
 * When its model is updated it will emit an event to notify its parent of the change.
 */
@Component({
  selector: 'hcc-grandchild',
  templateUrl: './binding-and-events-grandchild.component.html'
})
export class BindingAndEventsGrandchildComponent implements OnInit, OnChanges {

  /**
   * Grandchild model is just a string in this demo but could be any type, class, or interface.
   * The input binding is how updates are recieved from this component's parent.
   */
  @Input() grandchildModel: string = "grandchild";

  /**
   * This event emitter is triggered when the grandchild model is updated to notify this
   * component's parent that the change occured.
   */
  @Output() grandchildModelUpdated = new EventEmitter();

  /**
   * A hook to the input control in the template.
   */
  grandchildControl = new FormControl();

  /**
   * A counter to keep track of each time the grandchild model is updated through input binding.
   */
  updatesOnChanges: number = 0;

  /**
   * OnInit Lifecycle Hook
   * 
   * When the component is initialized set the initial value of the input control and
   * subscribe to changes made in that control by the user.
   */
  ngOnInit() {
    // Set the value in the input control to the value of the model.
    this.grandchildControl.patchValue(this.grandchildModel);
    // Subscribe to changes in the input control.
    this.grandchildControl.valueChanges.subscribe(value => {
      // When the user makes changes in the control update the model.
      this.grandchildModel = this.grandchildControl.value;
      // When the model is updated emit an event to notify this component's parent.
      this.grandchildModelUpdated.emit(this.grandchildModel);
    });
  }

  /**
   * OnChanges Lifecycle Hook
   * 
   * When a change in an input binding is detected update the input control and
   * increment the update counter.
   */
  ngOnChanges() {
    // Update the input control with the new model value.
    this.grandchildControl.patchValue(this.grandchildModel);
    // Increment the counter that tracks the number of updates from input binding.
    this.updatesOnChanges += 1;
  }
}
