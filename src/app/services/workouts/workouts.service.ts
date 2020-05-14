import { Injectable } from '@angular/core';
import WorkoutsMock from './workouts.mock';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  getWorkouts(): Observable<any> {
    return of(WorkoutsMock).pipe(delay(1000));
  }
}
