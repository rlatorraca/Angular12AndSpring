import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

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
  // Quando usamos o simbolo $ mostramos que o atributo é um Observable
  public courses$: Observable<Course[]>;
  public displayedColumns: string[] = ['name', 'category'];

  // Injecao de Dependencias


  constructor(private coursesService: CoursesService) {
    // carregado aqui por causa do mode STRICT deve ser no Construtor a inicializacao
    this.courses$ = this.coursesService.listAllCourses();
  }

  ngOnInit(): void {

  }

}
