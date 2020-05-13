import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from 'src/app/services/workouts/workouts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  public $workouts: Observable<Array<any>>;

  constructor(private workoutsService: WorkoutsService) { }

  ngOnInit(): void {
    // Fetch the workouts
    this.$workouts = this.workoutsService.getWorkouts();
  }

}
