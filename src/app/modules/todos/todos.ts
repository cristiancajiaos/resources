import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../interfaces/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit, OnDestroy {

  private todoService = inject(TodoService);

  public todos: Todo[] = [];

  private getTodosSubscription: Subscription;

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: (error) => {

      },
      complete: () => {

      }
    });
  }

  ngOnDestroy(): void {
    if (this.getTodosSubscription) {
      this.getTodosSubscription.unsubscribe();
    }
  }
}
