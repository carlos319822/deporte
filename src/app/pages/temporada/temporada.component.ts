import { Component, OnInit } from '@angular/core';
import { Temporada, TemporadaService } from 'src/app/servicios/temporada.service';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  temporadas:Temporada[]=[];

  constructor(private _temporadasService:TemporadaService) { }

  ngOnInit(): void {

    this.temporadas=this._temporadasService.getTemporadas();
    console.log(this.temporadas);
  }

}
