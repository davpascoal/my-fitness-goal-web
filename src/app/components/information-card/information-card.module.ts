import { NgModule } from '@angular/core';
import { InformationCardComponent } from './information-card.component';
import { MatCardModule } from '@angular/material/card';
import { EditableModule } from '../editable/editable.module';
import { CommonModule } from '@angular/common';
import { EditableEditModeDirective } from '../editable/directives/editable-edit-mode.directive';
import { EditableViewModeDirective } from '../editable/directives/editable-view-mode.directive';
import { EditableActionDirective } from '../editable/directives/editable-action.directive';

@NgModule({
  declarations: [
    InformationCardComponent,
    EditableEditModeDirective,
    EditableViewModeDirective,
    EditableActionDirective,
  ],
  imports: [
    MatCardModule,
    EditableModule,
    CommonModule,
  ],
  exports: [InformationCardComponent],
})

export class InformationCardModule {}
