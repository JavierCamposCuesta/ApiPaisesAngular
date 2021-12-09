import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchRESTCountries, Name } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  constructor(private httpClient:HttpClient) { }

  //VARIABLES PARA LA PETICIÓN
  url_base:string="https://restcountries.com/v3.1/name/"; //para que nos vaya sacando info de los caracteres que vayamos introduciendo
  resultado: any = null;

  buscarPaises(busqueda:string){//desde el componente por-pais le pasamos el nombre buscado y devolverá todo aquello que encaje con la búsqueda
    //La url que he buscado en thunderClient es https://restcountries.com/v3.1/name/{name}.
   //En este caso, al necesitar solo el nombre, no creo un objeto params.
    this.httpClient.get<SearchRESTCountries>(this.url_base + busqueda).subscribe(
      (resp) =>{
        console.log(resp);
       this.resultado = resp;
      }
    )
  }
}
