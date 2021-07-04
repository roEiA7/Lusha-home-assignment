import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  myLet: T | undefined;
}

@Directive({
  selector: '[myLet]'
})
export class MyLetDirective<T> {
  private _context: LetContext<T> = { myLet: undefined };

  constructor(_viewContainer: ViewContainerRef, _templateRef: TemplateRef<LetContext<T>>) {
    _viewContainer.createEmbeddedView(_templateRef, this._context);
  }

  @Input()
  set myLet(value: T) {
    this._context.myLet = value;
  }
}