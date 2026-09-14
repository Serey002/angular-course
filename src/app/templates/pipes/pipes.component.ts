import { CurrencyPipe, DatePipe, JsonPipe, KeyValuePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, JsonPipe, DatePipe, KeyValuePipe],
  selector: 'app-pipes',
  styleUrl: './pipes.component.css',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {

  name = "SeRey"
  price = 20

  myself = {name2: "Serey", age: 20}

  currentDate = new Date()

  //KeyValuePipe
  users = {
    name: 'Serey',
    role: 'Developer',
    status: 'Active'
  };

}
