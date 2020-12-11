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
    { id: 1, title: 'Урок 1', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },
    { id: 2, title: 'Урок 2', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },
    { id: 3, title: 'Урок 3', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },
    { id: 4, title: 'Урок 4', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },
    { id: 5, title: 'Урок 5', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },
    { id: 6, title: 'Урок 6', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },
    { id: 7, title: 'Урок 7', info: 'Урок посвящен', videoUrl: './assets/video/1. Устройство гитары.avi' },

  ];

  // tslint:disable-next-line:typedef
  getById(id: number) {
    return this.lessons.find(p => p.id === id);
  }


  constructor() { }
}
