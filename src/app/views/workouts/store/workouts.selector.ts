import { RootState } from 'src/app/app.module';
import { WorkoutsState } from './workouts.reducer';

export const selectWorkouts = (state: RootState): WorkoutsState => state.workouts;
