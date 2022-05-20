import { FormComponent } from './form/form.component';

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { CalendarComponent } from "./calendar.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: CalendarComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'form', component: FormComponent },
            { path: 'list', component: FormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CalendarRoutingModule { }