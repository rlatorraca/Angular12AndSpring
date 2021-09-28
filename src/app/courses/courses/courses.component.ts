import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // Atributes
  public courses: Course[] = [
    {_id: '1', name: 'Angular 12', category: 'Frontend'},
    {_id: '2', name: 'Java 13', category: 'Java'},
    {_id: '3', name: 'Java 17', category: 'Java'},
    {_id: '4', name: 'SpringBoot', category: 'Java'},
  ];
  public displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
