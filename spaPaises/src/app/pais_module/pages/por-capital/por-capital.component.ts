import { Component, OnInit } from '@angular/core';
import { SearchRESTCountries } from '../../interfaces/countries.interface';
import { PaisesServiceService } from '../../services/paises-service.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private servicio:PaisesServiceService) { }
  paises: SearchRESTCountries[] = [];
  busqueda: string = '';
  error: boolean = false;

  ngOnInit(): void {
  }

  get listaPaises(){
    return this.servicio.resultado;
  }

  buscar(busqueda :string){
    this.busqueda = busqueda;
    this.servicio.buscarPaisesCapital(this.busqueda)
    .subscribe({next: resp=>
      {
        this.paises = resp;
        this.error = false;
        console.log(this.paises);
      },
      error:
      (err) =>{
        this.error = true;
      }})
  }

}
