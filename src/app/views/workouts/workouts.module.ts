import { NgModule } from '@angular/core';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutsService } from 'src/app/services/workouts/workouts.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WorkoutsComponent],
  exports: [WorkoutsComponent],
  providers: [WorkoutsService],
  imports: [CommonModule]
})

export class WorkoutsModule {}
