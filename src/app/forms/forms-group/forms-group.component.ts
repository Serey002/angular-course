import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule, JsonPipe],
  selector: 'app-forms-group',
  styleUrl: './forms-group.component.css',
  templateUrl: './forms-group.component.html',
})
export class FormsGroupComponent {

  customerName = new FormControl('');

  //form group
  accountForm = new FormGroup({
    accountNumber: new FormControl(''),
    accountName: new FormControl(''),
    balance: new FormControl(0)
  })

  //function get value form from and set value to form
  get accountNumber() {
    return this.accountForm.controls.accountNumber;
  }

  get accountName() {
    return this.accountForm.controls.accountName;
  }

  get balance() {
    return this.accountForm.controls.balance;
  }

  //set value
  fillData() {
    //set value into function
    // this.accountNumber.setValue('0001')
    // this.accountName.setValue('Serey')
    // this.balance.setValue(2000)

    //set the entire form
    this.accountForm.setValue({
      accountNumber: "Serey Phem",
      accountName: "0002",
      balance: 2000
    })
  }

  ngOnInit(): void {
    // get data from function
    this.accountNumber.valueChanges.subscribe(value => console.log(value));
    //get all data from form
    this.accountForm.valueChanges.subscribe(value => console.log(value));
  }

  submitAccount() {
    console.log(this.accountForm.value);
    //access one value from form data
    console.log('Access account Name from form: ' + this.accountForm.get('accountName')?.value);
    //also use this
    console.log('Access account Name from form: ' + this.accountForm.controls.accountName.value);
  }
}
