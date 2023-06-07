import { Component, Inject } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent {

  constructor(
    public dialogRef:MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo:ToDo
    ) {}

  onFormSubmit(form: NgForm) {
    // this.todo.text = form.value.text;
    // this.dialogRef.close(this.todo);
    if (form.valid) {
      const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTodo);}
    
  }

  close() {
    this.dialogRef.close();
  }
}
