import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html'
})
export class BranchComponent implements OnInit, OnChanges {

  @Input() branchModel: string = "branch";
  @Output() branchModelUpdated = new EventEmitter();
  branchControl = new FormControl();
  updatesOnChanges: number = 0;
  updatesOnEvents: number = 0;

  ngOnInit() {
    this.branchControl.patchValue(this.branchModel);
    this.branchControl.valueChanges.subscribe(value => {
      this.branchModel = this.branchControl.value;
      this.branchModelUpdated.emit(this.branchModel);
    });
  }

  ngOnChanges() {
    this.branchControl.patchValue(this.branchModel);
    this.updatesOnChanges += 1;
  }

  childModelUpdated(event) {
    this.branchModel = event;
    this.branchControl.patchValue(this.branchModel);
    this.updatesOnEvents += 1;
  }
}
