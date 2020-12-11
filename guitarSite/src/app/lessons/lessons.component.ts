import { Component, OnInit } from '@angular/core';
import {LessonsService} from '../lessons.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor(public lessService : LessonsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
