import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx';

@Injectable()
export class TasksService {

  constructor(private _http :Http) { }


  saveTask(task) {
    const headers = new Headers();
    return this._http.post('tasks/add', task, { headers })
      .map(resp => resp.json());
  }

  getTasks(query) {
    const headers = new Headers();
    return this._http.post('tasks/list', query, { headers })
      .map(resp => resp.json());
  }

  deleteTask(taskId) {
    const headers = new Headers();

    const url = `tasks/remove/${taskId}`;
    return this._http.delete(url, { headers })
      .map(resp => resp.json());
  }

}
