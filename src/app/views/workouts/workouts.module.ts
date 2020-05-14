import { NgModule } from '@angular/core';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutsService } from 'src/app/services/workouts/workouts.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { WorkoutsEffects } from './store/workouts.effects';

@NgModule({
  declarations: [WorkoutsComponent],
  exports: [WorkoutsComponent],
  providers: [WorkoutsService],
  imports: [
    CommonModule,
    EffectsModule.forFeature([WorkoutsEffects])
  ]
})

export class WorkoutsModule {}
