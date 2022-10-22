import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { OyuncuListComponent } from './oyuncular/oyuncu-list/oyuncu-list.component';

const routes: Routes = [
  {path:":klup/:donem/oyuncular", component:OyuncuListComponent},
  // {path:":klup/:donem/macfoy", component:MacFoyComponent},
  // {path:":klup/:donem/macfoy/:hafta/:grup", component:MacFoyComponent},
  // {path:":klup/:donem", component:MacFoyComponent},
  {path:"", component:DashboardComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
