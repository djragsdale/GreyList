import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {

  isLoading = true;
  todos = [];

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    this.todos = await this.todoService.getTodos();
    this.isLoading = false;
  }
}
