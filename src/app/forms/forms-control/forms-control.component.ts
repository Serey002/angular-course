import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-forms-control',
  styleUrl: './forms-control.component.css',
  templateUrl: './forms-control.component.html',
})
export class FormsControlComponent implements OnInit{
  customerName = new FormControl('');

  accountNumber = new FormControl('');
  accountName = new FormControl('');
  balance = new FormControl(0)

  fillData() {
    this.accountNumber.setValue('0002')
    this.accountName.setValue('Serey')
    this.balance.setValue(2000)
  }

  ngOnInit() {
    this.accountNumber.valueChanges.subscribe( value => console.log(value));
  }

}
