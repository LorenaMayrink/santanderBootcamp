import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Lorena Franklin Mayrink Nogueira';
  text: Event | String = '';
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ]
  constructor (private peopleService: PeopleService) {

  }

  ngOnInit() {
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(): void {
    console.log('Clicou em min', this.nome)
  }

  getPeople (){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people
    })
  }
}
