import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src//app/services/personajes.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  //todos los personajes guardados por GET
  characters: any = null;
  
  //Filtro de Characters
  filtro: any = '';
  charFiltrados: any = [];

  constructor(private persService: PersonajesService) {}
  //personaje detalle que se envia al detalle.component
  charDetalle: any = [];

  //cargar la lista en el componente al abrir
  ngOnInit() {
    this.persService
      .obtener()
      .subscribe((result) => (this.characters = result));
  }
  //enviar por id, el detalle del personaje al detalle.component
  detalle(hero: any) {
    this.persService
      .detalleId(hero)
      .subscribe((result) => (this.charDetalle = result));
  }
  //Filtrar los Characters que se muestran
  filtrar(filtro: any) {
    this.charFiltrados=[];
    let array: any = {
      id: filtro,
      name: filtro,
      status: filtro,
      species: filtro,
      gender: filtro,
      origin: filtro,
    };
    for (let i = 0; i < this.characters.length; i++) {
      if (this.characters[i].name.toUpperCase().includes(array.name.toUpperCase())) {
        this.charFiltrados.push(this.characters[i]);
      }
      if (this.characters[i].status.toUpperCase() == array.status.toUpperCase()) {
        this.charFiltrados.push(this.characters[i]);
      }
      if (this.characters[i].species.toUpperCase() == array.species.toUpperCase()) {
        this.charFiltrados.push(this.characters[i]);
      }
      if (this.characters[i].gender.toUpperCase() == array.gender.toUpperCase()) {
        this.charFiltrados.push(this.characters[i]);
      }
      if (this.characters[i].origin.toUpperCase().includes(array.origin.toUpperCase())) {
        this.charFiltrados.push(this.characters[i]);
      }
    }
  }
}
