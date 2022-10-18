import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../intercafe/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial:string[]=[];
  private apikey :string = 'ynXTYR5wsA4KGybm5ZXyAJshxuVk5Eu1';
  public resultados : Gif [] = [];

  get historial(){
    return [...this._historial];
  }

  constructor( private http : HttpClient){}

  buscarGifs( query : string){
    query= query.trim().toLocaleLowerCase();
    if(!this._historial.includes( query)){
      this._historial.unshift( query);
      this._historial = this._historial.splice(0,10);

      // fetch('https://api.giphy.com/v1/gifs/search?api_key=ynXTYR5wsA4KGybm5ZXyAJshxuVk5Eu1&q=Goku&limit=10')
      //     .then(resp => {
      //       resp.json().then(data =>{
      //         console.log(data);
      //       })
      //     })

      this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=ynXTYR5wsA4KGybm5ZXyAJshxuVk5Eu1&q=${ query }&limit=10`)
          .subscribe(resp => {
            console.log(resp.data)
            this.resultados = resp.data;
          })
    }
    console.log(this._historial)
  }


}
