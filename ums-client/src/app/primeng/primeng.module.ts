import { NgModule } from '@angular/core';

import { PasswordModule } from 'primeng/password';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';

const modules = [
  PasswordModule,
  TabMenuModule,
  InputTextModule,
  DividerModule,
  InputTextareaModule,
  ButtonModule,
  DataViewModule,
  ToastModule,
];

@NgModule({
  exports: [
    ...modules
  ]
})
export class PrimengModule { }
