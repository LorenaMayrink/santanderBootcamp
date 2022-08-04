import { Component, OnInit } from '@angular/core';

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
      nome:'Lorena',
      sobrenome:'Mayrink'
    },
    {
      nome:'Guilherme',
      sobrenome: 'Peixe'
    },
    {
      nome:'Diego',
      sobrenome: 'Franklin'
    }
  ]
  constructor () {

  }

  ngOnInit() {
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
}
