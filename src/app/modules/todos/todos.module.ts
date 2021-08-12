import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './todos-routing.module';

import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodosModule {

}
