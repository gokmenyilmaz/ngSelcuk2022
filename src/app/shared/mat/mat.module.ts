import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card'
import {MatBadgeModule} from '@angular/material/badge'

import {MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const matModules=[  MatCardModule,  MatBadgeModule,MatDialogModule,MatSnackBarModule, MatFormFieldModule,MatButtonModule,MatInputModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModules,
    BrowserAnimationsModule
  
  ],

  exports:[
    matModules
  ]
})
export class MatModule { }
