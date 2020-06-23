import { Component, OnInit, Output, ContentChild, ElementRef, OnDestroy, EventEmitter, HostBinding, HostListener, Input } from '@angular/core';
import { EditableViewModeDirective } from 'src/app/components/editable/directives/editable-view-mode.directive';
import { EditableEditModeDirective } from 'src/app/components/editable/directives/editable-edit-mode.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-editable',
  template: `
    <ng-container *ngTemplateOutlet="currentView"></ng-container>
  `
})
export class EditableComponent implements OnInit, OnDestroy {
  @HostBinding('style.display') private display = 'block';
  @ContentChild(EditableViewModeDirective) viewModeTpl: EditableViewModeDirective;
  @ContentChild(EditableEditModeDirective) editModeTpl: EditableEditModeDirective;

  @Input() action;
  @Output() update = new EventEmitter();

  mode: 'view' | 'edit' = 'view';

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  constructor(private host: ElementRef) { }

  ngOnInit(): void { }

  private get element(): HTMLElement {
    return this.host.nativeElement;
  }

  @HostListener('dblclick') dblclick() {
    this.mode = 'edit';
    // this.editMode.next(true);
    console.log('dblclick');
  }

  @HostListener('document:click', ['$event.target']) clickOutside(target) {
    if (this.element.contains(target) === false){
      // this.update.emit(null);
      this.mode = 'view';
    }
  }

  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }

  executeAction() {
    this.mode = 'view';
    this.action();
  }



  ngOnDestroy(): void { }

}
