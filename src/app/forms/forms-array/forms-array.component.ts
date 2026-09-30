import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule ,JsonPipe],
  selector: 'app-forms-array',
  styleUrl: './forms-array.component.css',
  templateUrl: './forms-array.component.html',
})
export class FormsArrayComponent {
  private formBuilder = inject(FormBuilder)

  accountForm = this.formBuilder.group({
    accountNumber: [''],
    accountName: [''],
    balance: [0],
    beneficiaries: this.formBuilder.array([])
  })

  get beneficiaries() {
    return this.accountForm.controls.beneficiaries
  }

  fillData() {
    this.accountForm.setValue({
      accountNumber: "0002",
      accountName: "Serey Phem",
      balance: 2000,
      beneficiaries: []
    })
  }

  addBeneficiaries() {
    this.beneficiaries.push(
      this.formBuilder.control('')
    )
  }

  removeBeneficiaries(index: number) {
    this.beneficiaries.removeAt(index)
  }




  submitAccount() {
    console.log(this.accountForm.value);
  }
}

