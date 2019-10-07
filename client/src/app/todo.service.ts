import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  add(text: string): void {
    console.log('Todo service add');
  }

  complete(id: string): void {
    console.log('Todo service complete');
  }

  delete(id: string): void {
    console.log('Todo service delete');
  }

  getTodoList(id: string): any {
    console.log('Todo service getTodoList');
  }

  getTodos(): any {
    console.log('Todo service getTodos');
    // return TODOS;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TODOS);
      }, 5000);
    })
  }
}
