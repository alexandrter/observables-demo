import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
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
}
