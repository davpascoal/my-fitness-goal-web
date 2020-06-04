import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appEditableViewMode]'
})
export class EditableViewModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
