import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html'
})
export class BranchComponent implements OnInit {
  // The branch model
  branchModel: string;

  // The event emitter used to communicate with parent component
  @Output() branchModelUpdated = new EventEmitter();

  // The input control in the template
  branchControl = new FormControl();

  // Track how many times a child has updated this component's data model
  updatesOnEvents: number = 0;

  // OnInit we set our input control to match our model and then 
  // subscribe to any changes to the value in that control
  ngOnInit() {
    // Put the model value into the input control
    this.branchControl.patchValue(this.branchModel);
    this.branchControl.valueChanges.subscribe(value => {
      // The input control updated, so update the data model
      this.branchModel = this.branchControl.value;
      // The input control updated, so notify any parent controls that may be listening.
      this.branchModelUpdated.emit(this.branchModel);
    });
  }
  
  // Handle events sent up the tree from our child components
  childModelUpdated(event) {
    // Update this model with the child's model value
    this.branchModel = event;
    // Update the input control with the new value
    this.branchControl.patchValue(this.branchModel);    
    this.updatesOnEvents += 1;
  }
}
