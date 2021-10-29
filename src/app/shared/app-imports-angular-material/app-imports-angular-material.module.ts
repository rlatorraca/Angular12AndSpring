import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

// Esse modulo serve como um CENTRALIZADOR de todos os IMPORTS do Angular MATERIAL, usado na aplicacao
// => Nao precisamo da
//    declarations: [],
//      imports: [
//        CommonModule
//      ]

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class AppImportsAngularMaterialModule { }
