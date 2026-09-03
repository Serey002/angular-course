import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-todo-item',
  styleUrl: './todo-item.component.css',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {

  @Input() text!: string;
  @Input() id!: number;

  @Output() remove = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.id)
  }
}
