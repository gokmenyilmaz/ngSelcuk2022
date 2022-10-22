import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatModule } from './mat/mat.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatModule
  
 
  ],
  declarations: [],
  exports:[
    CommonModule,
    FormsModule,
    MatModule


  ]
})
export class SharedModule { }
