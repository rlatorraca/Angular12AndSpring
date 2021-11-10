import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
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
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AppImportsAngularMaterialModule { }
