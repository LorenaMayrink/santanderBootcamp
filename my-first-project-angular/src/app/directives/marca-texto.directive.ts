import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo = 'pink';
  @Input() corDoTexto = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    this.mudarFundo
  }

  private mudarFundo(cor: string = 'pink'){
    this.elemento.nativeElement.style.backgroundColor = cor || this.corDeFundo;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }
}
