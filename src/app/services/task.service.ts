import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // pass directive "method"
  // getTasks() : Task[] {
  //   return TASKS;
  // }

  // observable method for async data
  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

}
