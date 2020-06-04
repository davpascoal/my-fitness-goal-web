import { Directive, HostListener } from "@angular/core";
import { EditableComponent } from '../editable.component';

@Directive({
  selector: '[appEditableAction]'
})
export class EditableActionDirective {
  constructor(private editable: EditableComponent) {}

  @HostListener('keyup.enter')
  onEnter() {
    this.editable.executeAction();
  }
}
