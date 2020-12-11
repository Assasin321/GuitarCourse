import {Component, Input, OnInit} from '@angular/core';
import {Lesson, LessonsService} from '../lessons.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lesson: Lesson;
  next: number;
  previous: number;

  constructor(private lessService: LessonsService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.lesson = this.lessService.getById(+params.get('id'));
    });
  }

  nextPost(): void {
    this.next = this.lesson.id + 1;
    this.router.navigate(['/lessons', this.next]);
  }

  previousPost(): void {
    this.previous = this.lesson.id - 1;
    this.router.navigate(['/lessons', this.previous]);
  }



}
