import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appEditableEditMode]'
})
export class EditableEditModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
