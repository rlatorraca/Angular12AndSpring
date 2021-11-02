import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppImportsAngularMaterialModule } from '../shared/app-imports-angular-material/app-imports-angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppImportsAngularMaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }
