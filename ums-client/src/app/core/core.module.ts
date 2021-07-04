import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { MessageService } from 'primeng/api';

const components = [
  TopBarComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
  ],
  exports: [
    ...components,
  ],
  providers: [
    MessageService
  ]
})
export class CoreModule { }
