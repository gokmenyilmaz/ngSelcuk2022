import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card'
import {MatBadgeModule} from '@angular/material/badge'

import {MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatFormFieldModule} from '@angular/material/form-field';

const matModules=[  MatCardModule,  MatBadgeModule,MatDialogModule,MatSnackBarModule, MatFormFieldModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModules
  
  ],

  exports:[
    matModules
  ]
})
export class MatModule { }
