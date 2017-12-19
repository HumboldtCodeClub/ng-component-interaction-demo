import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Child component for input binding and events demo.
 * 
 * The binding and events demo child component recieves data from 
 * its parent component and passes data to its children components via input binding.
 * 
 * It recieves data updates from its children components and sends data to its parent
 * component via events.
 */
@Component({
  selector: 'hcc-child',
  templateUrl: './binding-and-events-child.component.html'
})
export class BindingAndEventsChildComponent implements OnInit, OnChanges {

  /**
   * The child model bound to its parent component wth the input decorator.
   */
  @Input() childModel: string = "child";

  /**
   * An event emitter to facilitate child to parent component interaction.
   */
  @Output() childModelUpdated = new EventEmitter();

  /**
   * A hook to the form control in the template.
   */
  childControl = new FormControl();

  /**
   * Counter to track number of updates from parent component.
   */
  updatesOnChanges: number = 0;

  /**
   * Counter to track number of updates from child components.
   */
  updatesOnEvents: number = 0;

  /**
   * OnInit Component Lifecycle Hook.
   * 
   * When the component is initialized the form control in the template
   * is set to the data model value and we subscribe to changes in the form control.
   */
  ngOnInit() {
    // Set the form model to match the data model.
    this.childControl.patchValue(this.childModel);
    // Subscribe to changes from the template.
    this.childControl.valueChanges.subscribe(value => {
      // When changes are made in the template update the data model.
      this.childModel = this.childControl.value;
      // When the data model is updated emit an event to notify the parent component.
      this.childModelUpdated.emit(this.childModel);
    });
  }

  /**
   * OnChanges Component Lifecycle Hook.
   * 
   * Input binding updates are detected in the on changes hook.
   */
  ngOnChanges() {
    // When the data model is updated apply the change to the form model.
    this.childControl.patchValue(this.childModel);
    // When the data model is updated from the parent increment the counter.
    this.updatesOnChanges += 1;
  }

  /**
   * Listener for change events coming from any children components.
   * 
   * @param event
   */
  grandchildModelUpdated(event) {
    // When a child component sends a change notification update the data model.
    this.childModel = event;
    // When the data model changes update the form model.
    this.childControl.patchValue(this.childModel);
    // When a notification is recieved from a child update the counter.
    this.updatesOnEvents += 1;
  }
}
