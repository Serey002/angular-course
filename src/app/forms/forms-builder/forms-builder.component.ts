import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-forms-builder',
  styleUrl: './forms-builder.component.css',
  templateUrl: './forms-builder.component.html',
})
export class FormsBuilderComponent {

  private formBuilder = inject(FormBuilder)

  accountForm = this.formBuilder.group({
    accountNumber: [''],
    accountName: [''],
    balance: [0]
  })

   fillData() {
    this.accountForm.setValue({
      accountNumber: "0002",
      accountName: "Serey Phem",
      balance: 2000
    })
  }

  submitAccount() {
    console.log(this.accountForm.value);
  }


}
