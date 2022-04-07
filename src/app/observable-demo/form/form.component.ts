import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators} from "@angular/forms";
import {of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl(null, Validators.required, this.asyncValidator),
      'email': new FormControl(null),
      'password': new FormControl(null),
    })
  }

  ngOnInit(): void {
    const nameControl: AbstractControl|null = this.myForm.get('username');

    nameControl?.valueChanges.subscribe(
      (value: string) => console.log('username value changed to: ' + value)
    );

    nameControl?.statusChanges.subscribe(
      (status: string) => console.log('username status changed to: ' + status)
    )
  }

  asyncValidator: AsyncValidatorFn =
    (control: AbstractControl) => {

      if (control.value.includes('dummy')) {
        return of({dummyValue: true})
          .pipe(
            tap(() => console.log("async validator emitted a value")),
            delay(2000)
          );
      }

      return of(null).pipe(delay(2000));
    }
  ;
}
