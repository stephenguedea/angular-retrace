import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  // pass directive "method"
  // getTasks() : Task[] {
  //   return TASKS;
  // }

  // observable method for async data
  // getTasks(): Observable<Task[]> {
  //   return of(TASKS);
  // }

  // getting tasks data from json server 
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

}
