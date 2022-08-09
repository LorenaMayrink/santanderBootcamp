import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
    {
      firstName:'Lorena',
      lastName: 'Mayrink',
      age: 22

    },
    {

      firstName:'Lorena',
      lastName: 'Mayrink',
      age:22
    },
    {

      firstName:'Lorena',
      lastName: 'Mayrink',
      age:22
    }
    ]
    return of(peopleArray)
  }
}
