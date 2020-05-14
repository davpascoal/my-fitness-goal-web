import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './workouts.actions';

interface StateRequest<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export interface WorkoutsState {
  workouts: StateRequest<Array<any>>;
}

const initialState: WorkoutsState = {
  workouts: {
    data: [],
    loading: false,
    error: null
  }
};

const reducer = createReducer(
  initialState,
  on(actions.GetWorkoutsRequestAction, getWorkoutsRequest),
  on(actions.GetWorkoutsSuccessAction, getWorkoutsSuccess)
);

function getWorkoutsRequest(state: WorkoutsState): WorkoutsState {
  return {
    ...state,
    workouts: {
      ...state.workouts,
      loading: true,
    }
  };
}

function getWorkoutsSuccess(state: WorkoutsState, {payload}): WorkoutsState {
  return {
    ...state,
    workouts: {
      ...state.workouts,
      data: payload,
      loading: false
    }
  };
}

export function WorkoutsReducer(state: WorkoutsState | undefined, action: Action) {
  return reducer(state, action);
}
