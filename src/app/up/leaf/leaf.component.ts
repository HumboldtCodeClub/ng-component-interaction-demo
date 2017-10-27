import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html'
})
export class LeafComponent implements OnInit {
  // The leaf model
  leafModel: string = "Bubble Up";

  // The event emitter used to communicate with the parent component
  @Output() leafModelUpdated = new EventEmitter();

  // The input control linked in the template
  leafControl = new FormControl();

  // On init set the control value and subscribe to changes in the control
  ngOnInit() {
    // Set the control value to the model value
    this.leafControl.patchValue(this.leafModel);
    // Subscribe to changes in the input control
    this.leafControl.valueChanges.subscribe(value => {
      // When the input control value changes, update the model to match
      this.leafModel = this.leafControl.value;
      // When the input control value changes, notify our parent component
      this.leafModelUpdated.emit(this.leafModel);
    });
  }
}
