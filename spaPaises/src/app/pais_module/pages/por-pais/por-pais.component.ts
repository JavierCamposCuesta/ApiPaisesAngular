import { Component, OnInit } from '@angular/core';
import { PaisesServiceService } from '../../services/paises-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private servicio:PaisesServiceService) { }

  ngOnInit(): void {
  }

  get listaPaises(){
    return this.servicio.resultado;
  }
}
