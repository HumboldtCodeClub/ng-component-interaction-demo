import { Component, OnInit }   from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector:    'app-tree-top',
  templateUrl: './tree-top.component.html'
})
export class TreeTopComponent implements OnInit {

  // The tree top model
  topModel: string;

  // Form control hooked to the template
  topControl = new FormControl();

  // Track updates recieved from children components
  updatesOnEvents: number = 0;

  // On init set control value and subscribe to control changes
  ngOnInit() {
    // Set the input control to the model value
    this.topControl.patchValue(this.topModel);
    // Subscribe to changes in the input control
    this.topControl.valueChanges.subscribe(value => {
      // Input control changed, so update the model value.
      this.topModel = this.topControl.value;
    });
  }

  // Listen for child events
  childEventDetected(event) {
    // Child updated its model, so update this model to match
    this.topModel = event;
    // Update the form control to match the model change
    this.topControl.patchValue(this.topModel);
    this.updatesOnEvents += 1;
  }
}
