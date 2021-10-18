import { HttpClient } from '@angular/common/http'; // Usado para fazer a conexao(buscar dados) com a API
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';


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

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  listAllCourses() {
    return this.httpClient
               .get<Course[]>(this.API)
               .pipe(
                 first(), // pega apenas a primeira resposta e fecha a conexao
                 delay(1500),
                 tap(courses => console.log(courses))

              );

  }
}
