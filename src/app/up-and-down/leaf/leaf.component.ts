import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html'
})
export class LeafComponent implements OnInit, OnChanges {
  @Input() leafModel: string = "leaf";
  @Output() leafModelUpdated = new EventEmitter();
  leafControl = new FormControl();
  updatesOnChanges: number = 0;

  ngOnInit() {
    this.leafControl.patchValue(this.leafModel);
    this.leafControl.valueChanges.subscribe(value => {
      this.leafModel = this.leafControl.value;
      this.leafModelUpdated.emit(this.leafModel);
    });
  }

  ngOnChanges() {
    this.leafControl.patchValue(this.leafModel);
    this.updatesOnChanges += 1;
  }
}
