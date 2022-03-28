import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporadaService {

  private temporadas:Temporada[]=[

    {
      nombre:"Colombia",
      img:"assets/img/colombia.jpg",
      des:"Aqui encontraras las temporadas de los partidos disputados, jugadores, jugadores y noticias",
      temp:"https://www.google.com/search?q=emporada+de+partidos+de+colombia&rlz=1C1NHXL_esCO835CO835&oq=emporada+de+partidos+de+colombia&aqs=chrome..69i57.8888j0j7&sourceid=chrome&ie=UTF-8#sie=t;/m/032c08;2;/g/1226mn9d;pl;fp;1;;"

    },
    {
      nombre:"Ecuador",
      img:"assets/img/ecuador.jpg",
      des:"Aqui encontraras las temporadas de los partidos disputados, jugadores, jugadores y noticias",
      temp:"https://www.google.com/search?q=temporada+ecuador&rlz=1C1NHXL_esCO835CO835&oq=temporada+ecuador&aqs=chrome..69i57.4616j0j7&sourceid=chrome&ie=UTF-8#sie=t;/m/03zj_3;2;/g/1226mn9d;mt;fp;1;;"
    },
    {
      nombre:"Peú",
      img:"assets/img/peru.jpg",
      des:"Aqui encontraras las temporadas de los partidos disputados, jugadores, jugadores y noticias",
      temp:"https://www.google.com/search?q=temporadadepartidos+peru&rlz=1C1NHXL_esCO835CO835&oq=temporadadepartidos+peru&aqs=chrome..69i57.5496j0j7&sourceid=chrome&ie=UTF-8#sie=t;/m/03rrdb;2;/g/1226mn9d;pl;fp;1;;"
    },
    {
      nombre:"Bolivia",
      img:"assets/img/bolivia.jpg",
      des:"Aqui encontraras las temporadas de los partidos disputados, jugadores, jugadores y noticias",
      temp:"https://www.google.com/search?q=temporada+bolivia&rlz=1C1NHXL_esCO835CO835&oq=temporada+bolivia&aqs=chrome..69i57.3040j0j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11sgf02k2_;2;/m/093h68;mt;fp;1;;"
    }



  ];

  getTemporadas():Temporada[]{
    return this.temporadas;
  }

  constructor() { }
}


export interface Temporada{
  nombre:string;
  img:string;
  des:string;
  temp:string;
}