import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { TasksService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  name: string;
  done: boolean;
  owner: string;

  constructor(
    private _tasks :TasksService,
    private _userService: UserService,
    private _router :Router,
  ) { }

  ngOnInit() {
    const user = this._userService.getCurrentUser();
    this.owner = user.id;
    this.done = false;
  }

  onAddTask() {

    if(!this.name) {
      return false;
    }

    const task = {
      name : this.name,
      owner: this.owner,
      done: this.done
    }

    this._tasks.saveTask(task).subscribe(
      resp => {
        this._router.navigate(['/home']);
      }
    );
  }


}

