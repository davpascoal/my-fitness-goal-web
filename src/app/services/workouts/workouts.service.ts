import { Injectable } from '@angular/core';
import WorkoutsMock from './workouts.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  getWorkouts() {
    return of(WorkoutsMock);
  }
}
