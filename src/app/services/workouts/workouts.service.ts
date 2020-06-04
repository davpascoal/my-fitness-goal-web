import { Injectable } from '@angular/core';
import WorkoutsMock from './workouts.mock';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<any> {
    return this.http.get(`${environment.api}/workouts`);
  }
}
