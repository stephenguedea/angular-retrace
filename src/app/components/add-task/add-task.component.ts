import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: any;

  

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe(value => {
      this.showAddTask = value
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text || !this.day || !this.reminder) {
      alert("Please complete the form")
    }
    

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };


      this.onAddTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    

  }

}
