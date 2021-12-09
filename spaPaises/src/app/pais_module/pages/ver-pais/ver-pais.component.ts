import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesServiceService } from '../../services/paises-service.service';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private servicio:PaisesServiceService) {
    console.log(route.snapshot.params['id'])
  }
  ngOnInit(): void {
  }

  busqueda:string = "";

  pasarBusqueda(){
    this.servicio.buscarPaises(this.busqueda);
  }
}
