import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

/*
  COMPONENTS
  - Dentro do componentes:
    a) Codigo necesario para renderizacao das telas
    b) Validacoes basicas

  SERVICES
  - Dentro do service:
    a) Tudo relacionado a DADOS
    b) Tudo relacionado a MANIPULACAO DE DADOS
    c) Passando (a) e (b) para os COMPONENTS

*/

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  // Atributes
  public courses: Observable<Course[]>;
  public displayedColumns: string[] = ['name', 'category'];

  // Injecao de Dependencias


  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog) {
    // carregado aqui por causa do mode STRICT deve ser no Construtor a inicializacao
    this.courses = this.coursesService.listAllCourses().pipe(
      catchError(error => {
        console.log(error);
        this.openErrorDialog('Error loading !!!')
        return of([]) ;
      })
    );
  }

  ngOnInit(): void {

  }

  openErrorDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

}
