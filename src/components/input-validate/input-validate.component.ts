import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-validate',
  templateUrl: './input-validate.component.html',
  styleUrls: ['./input-validate.component.css']
})
export class InputValidateComponent implements OnInit {

  @Input() isSubmitted: boolean;
  @Input() label: string = '';
  @Input() controlId: string = '';
  @Input() typeControl: string = '';
  @Input() mask: string = '';

  @Input() controlInsance: any;
  @Input() form: FormGroup;

  @Input() messageError: [{ id: string, type: string, message: string }];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBlur: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  onBlurEvent(event: any) {
    if (this.onBlur) {
      this.onBlur.emit(event);
    }
  }

  getErrorMessage(): string {
    let prop = '';

    // tslint:disable-next-line: forin
    for (const key in this.controlInsance.errors) {
      prop = key;
    }

    return this.messageError.filter(f => f.type === prop && this.controlId === f.id)[0].message;
  }

}
