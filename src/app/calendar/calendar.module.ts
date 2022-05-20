import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CalendarComponent,
    HomeComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
