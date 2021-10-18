import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

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
  public courses: Course[] = [];
  public displayedColumns: string[] = ['name', 'category'];

  // Injecao de Dependencias


  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {
    this.courses = this.coursesService.listAllCourses(); // carregado apenas como inicializado o COMPONENTE
  }

}
