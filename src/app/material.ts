import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class MaterialModule { }
