import { Injectable } from '@angular/core';
export interface Lesson{
  id: number;
  title: string;
  info: string;
  videoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: Lesson[] = [
    { id: 1, title: 'Урок 1', info: 'Введение', videoUrl: 'assets/video/1.mp4' },
    { id: 2, title: 'Урок 2', info: 'Что нужно знать', videoUrl: 'assets/video/2.mp4' },
    { id: 3, title: 'Урок 3', info: 'Разработка рук. Первые мелодии', videoUrl: 'assets/video/3.mp4' },
    { id: 4, title: 'Урок 4', info: 'Игра аккордами', videoUrl: 'assets/video/4.mp4' },
    { id: 5, title: 'Урок 5', info: 'Аккорды на баррэ', videoUrl: 'assets/video/5.mp4' },
    { id: 6, title: 'Урок 6', info: 'Полезности', videoUrl: 'assets/video/6.mp4' },
    { id: 7, title: 'Урок 7', info: 'Изучение песни', videoUrl: 'assets/video/7.mp4' },

  ];

  // tslint:disable-next-line:typedef
  getById(id: number) {
    return this.lessons.find(p => p.id === id);
  }


  constructor() { }
}
