import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as fromTodo from '../todo.actions'

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', { static: true }) txtInputFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)

    this.chkField.valueChanges.subscribe(() => {
      this.store.dispatch(new fromTodo.ToggleTodoActions(this.todo.id))
    })
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 100);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) { return }
    if (this.txtInput.value === this.todo.texto) { return }
    this.store.dispatch(new fromTodo.EditarTodoActions(this.todo.id, this.txtInput.value))
  }

  eiminar() {
    this.store.dispatch(new fromTodo.BorrarTodoActions(this.todo.id))
  }
}
