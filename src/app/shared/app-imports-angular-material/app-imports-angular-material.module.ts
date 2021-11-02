import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

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
    MatButtonModule
  ]
})
export class AppImportsAngularMaterialModule { }
