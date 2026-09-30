import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  imports: [ReactiveFormsModule, JsonPipe ],
  selector: 'app-form-validation',
  styleUrl: './form-validation.component.css',
  templateUrl: './form-validation.component.html',
})
export class FormValidationComponent {

  private formBuilder = inject(FormBuilder)

  accountForm = this.formBuilder.group({
    accountNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    accountName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    balance: [0, [Validators.required, Validators.min(0), Validators.max(100000)]],
    beneficiaries: this.formBuilder.array([])
  })

  get beneficiaries() {
    return this.accountForm.controls.beneficiaries
  }

  onAccountNumberInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const accountNumber = input.value.replace(/\D/g, '').slice(0, 6);

    input.value = accountNumber;
    this.accountForm.controls.accountNumber.setValue(accountNumber);
  }

  fillData() {
    this.accountForm.setValue({
      accountNumber: "000006",
      email: "sereyphem@mail.com",
      accountName: "Serey Phem",
      balance: 2000,
      beneficiaries: []
    })
  }

  addBeneficiaries() {
    this.beneficiaries.push(
      this.formBuilder.control('', Validators.required)
    )
  }

  removeBeneficiaries(index: number) {
    this.beneficiaries.removeAt(index)
  }

  submitAccount() {
    if(this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return
    }
    console.log(this.accountForm.value);
  }
}
