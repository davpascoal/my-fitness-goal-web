import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import * as WorkoutsAction from './workouts.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { WorkoutsService } from 'src/app/services/workouts/workouts.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class WorkoutsEffects {

  public getWorkouts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WorkoutsAction.FETCH_WORKOUTS_REQUEST),
      switchMap(
        () => this.workoutsService.getWorkouts()
          .pipe(
            map(payload => WorkoutsAction.GetWorkoutsSuccessAction({payload})),
            catchError(() => EMPTY)
          )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private workoutsService: WorkoutsService
  ) {}
}
