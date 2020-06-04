import { NgModule } from '@angular/core';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutsService } from 'src/app/services/workouts/workouts.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { WorkoutsEffects } from './store/workouts.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InformationCardModule } from 'src/app/components/information-card/information-card.module';

@NgModule({
  declarations: [
    WorkoutsComponent,
  ],
  exports: [WorkoutsComponent],
  providers: [WorkoutsService],
  imports: [
    CommonModule,
    InformationCardModule,
    EffectsModule.forFeature([WorkoutsEffects]),
    MatProgressSpinnerModule
  ]
})

export class WorkoutsModule {}
