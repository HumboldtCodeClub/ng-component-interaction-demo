import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tree-top',
  templateUrl: './tree-top.component.html'
})
export class TreeTopComponent implements OnInit {

  topModel: string = "Welcome";
  topControl = new FormControl();
  updatesOnEvents: number = 0;
  
  // On init set the input value and subscribe to changes
  ngOnInit() {
    // Set the control value to the model value
    this.topControl.patchValue(this.topModel);
    // Subscribe to control updates
    this.topControl.valueChanges.subscribe(value => {
      // Input value changed, update the model
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
