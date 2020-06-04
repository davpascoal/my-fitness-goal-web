import { NgModule } from '@angular/core';
import { EditableComponent } from './editable.component';
import { EditableEditModeDirective } from 'src/app/components/editable/directives/editable-edit-mode.directive';
import { EditableViewModeDirective } from 'src/app/components/editable/directives/editable-view-mode.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EditableComponent,
  ],
  imports: [CommonModule],
  exports: [EditableComponent]
})

export class EditableModule {}
