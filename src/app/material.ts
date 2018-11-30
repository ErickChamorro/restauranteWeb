import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
      MatButtonModule, 
      MatTableModule,
      MatCheckboxModule,
      MatInputModule,
      MatSelectModule
    ],
  exports: [
      MatButtonModule, 
      MatTableModule,
      MatCheckboxModule,
      MatInputModule,
      MatSelectModule
    ]
})
export class MaterialModule { }