import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyLetDirective } from './directives/my-let.directive';

// components = [];
const modules = [
  FormsModule,
  ReactiveFormsModule,
]

const directives = [
  MyLetDirective
]

@NgModule({
  declarations: [
    ...directives,
  ],
  exports: [
    ...modules,
    ...directives,
  ]
})
export class SharedModule { }
