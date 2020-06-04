import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/app.module';
import * as WorkoutActions from './store/workouts.actions';
import { selectWorkouts } from './store/workouts.selector';
import { map } from 'rxjs/internal/operators/map';
import { IWorkout } from 'src/app/interfaces/workout.interface';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  public workouts: Array<IWorkout>;
  public loading: boolean;
  private $workoutsSubscription: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
    this.$workoutsSubscription = this.store.pipe(
      select(selectWorkouts)
    ).pipe(
      map(x => {
        this.workouts = x.workouts.data;
        this.loading = x.workouts.loading;
        this.changeDetectorRef.markForCheck();
      })
    ).subscribe();

    // Fetch the workouts
    this.store.dispatch(WorkoutActions.GetWorkoutsRequestAction());
  }

  public saveWorkout() {
    console.log('save workout', this.workouts);
  }

  public ngOnDestroy() {
    if (this.$workoutsSubscription) {
      this.$workoutsSubscription.unsubscribe();
    }
  }
}
