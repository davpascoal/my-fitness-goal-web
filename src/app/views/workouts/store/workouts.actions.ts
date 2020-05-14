import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const FETCH_WORKOUTS_REQUEST = '[Workouts] FETCH_WORKOUTS_REQUEST';
export const FETCH_WORKOUTS_SUCCESS = '[Workouts] FETCH_WORKOUTS_SUCCESS';
export const FETCH_WORKOUTS_FAILURE = '[Workouts] FETCH_WORKOUTS_FAILURE';

export const FETCH_WORKOUT_REQUEST = '[Workouts] FETCH_WORKOUT_REQUEST';
export const FETCH_WORKOUT_SUCCESS = '[Workouts] FETCH_WORKOUT_SUCCESS';
export const FETCH_WORKOUT_FAILURE = '[Workouts] FETCH_WORKOUT_FAILURE';

export const GetWorkoutsRequestAction = createAction(
  FETCH_WORKOUTS_REQUEST,
);

export const GetWorkoutsSuccessAction = createAction(
  FETCH_WORKOUTS_SUCCESS,
  props<{payload: Array<any>}>()
);

export const GetWorkoutsFailureAction = createAction(
  FETCH_WORKOUTS_FAILURE,
  props<{error: HttpErrorResponse}>()
);

export const getWorkout = createAction(
  FETCH_WORKOUTS_REQUEST,
  props<{id: string}>()
);
