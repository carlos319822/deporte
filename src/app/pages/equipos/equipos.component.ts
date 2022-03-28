import { Component, OnInit } from '@angular/core';
import { Equipo, EquiposService } from 'src/app/servicios/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos:Equipo[]=[];

  constructor(private _equiposService:EquiposService) { }

  ngOnInit(): void {

    this.equipos=this._equiposService.getEquipos();
    console.log(this.equipos);
  }

}
