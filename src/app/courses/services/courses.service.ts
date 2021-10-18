import { HttpClient } from '@angular/common/http'; // Usado para fazer a conexao(buscar dados) com a API
import { Injectable } from '@angular/core';
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

    @Injectable => serve para fornecer essa class para ser usada em outros modulos (reutulizaveis) (ex: HttpClient)

*/

@Injectable({
  providedIn: 'root' // a isntancia desa classe estara disponivel de maneira GLOBAL (root / raiz ate dentro do projeto)
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listAllCourses(): Course[] {
    return [
      { _id: '1', name: 'Angular 12', category: 'Frontend' },
      { _id: '2', name: 'Java 13', category: 'Java' },
      { _id: '3', name: 'Java 17', category: 'Java' },
      { _id: '4', name: 'SpringBoot', category: 'Java' },
    ];

  }
}
