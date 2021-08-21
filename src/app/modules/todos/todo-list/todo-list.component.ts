import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TodosService } from '../todos.service';
import type { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) { }

  public todos: Todo[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userId = Number(params['userId']);

      if (Number.isNaN(userId)) {
        this.todosService.getAllTodos().subscribe((data) => {
          this.todos = data;
        });
      } else {
        this.todosService.getTodosByUser(userId).subscribe((data) => {
          this.todos = data;
        });
      }
    });
  }

  toggleCompletion(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id) as Todo;
    this.todosService.updateTodo(id, todo).subscribe((data) => {
      console.log('todo updated:' , data);
    });
  }
}
