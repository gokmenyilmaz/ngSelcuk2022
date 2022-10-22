import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatModule } from './mat/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatModule,
    BrowserAnimationsModule
  
 
  ],
  declarations: [],
  exports:[
    CommonModule,
    FormsModule,
    MatModule,
    BrowserAnimationsModule


  ]
})
export class SharedModule { }
