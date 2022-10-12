import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  

  buscar(){
    const valor : string = this.txtBuscar.nativeElement.value;
    //console.log(valor)
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value='';
  }
  constructor( private gifsService : GifsService) { }



}
