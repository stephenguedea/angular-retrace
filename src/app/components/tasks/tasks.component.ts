import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskSvc: TaskService) { }

  ngOnInit(): void {
    this.retrieveTasks();
  }

  // retrieveTasks() {
  //   this.tasks = this.taskSvc.getTasks();
  // }

  // subscribe to an observable method
  retrieveTasks() {
    this.taskSvc.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }

}
