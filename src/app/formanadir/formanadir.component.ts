import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src//app/services/personajes.service';

@Component({
  selector: 'app-formanadir',
  templateUrl: './formanadir.component.html',
  styleUrls: ['./formanadir.component.css'],
})
export class FormanadirComponent implements OnInit {
  //personajes nuevos que se añaden
  characters: any = {
    id: '',
    name: '',
    status: '',
    species: '',
    gender: 'Elige una',
    origin: '',
    image: 'https://rickandmortyapi.com/api/character/avatar/',
  };
  pers: any = [];
  totChars: any = 0;

  constructor(private persService: PersonajesService) {}

  ngOnInit() {
    this.persService.obtener().subscribe((result) => (this.pers = result));
  }
  //Obtener total de Characters para no repetir IDs
  contAnadidos() {
    this.totChars = this.pers.length + 1;
  }
  //NO Añadir si el ID existe, pero si Modificar
  existe(valor: number) {
    let repetido = false;
    for (let i = 0; i < this.pers.length; i++) {
      if (this.pers[i].id == valor) {
        repetido = true;
      }
      if (valor <= 0) {
        repetido = true;
      }
    }
    return repetido;
  }
  // Controlar que no esten vacios para Añadir
  noVacio() {
    const data = {
      id: this.characters.id,
      name: this.characters.name,
      status: this.characters.status,
      species: this.characters.species,
      gender: this.characters.gender,
      origin: this.characters.origin,
      image: this.characters.image + this.totChars + '.jpeg',
    };
    let vacio = false;
    if (data.name=='') {
      vacio = true;
    }
    if (data.status=='') {
      vacio = true;
    }
    if (data.species=='') {
      vacio = true;
    }
    if (data.gender=='') {
      vacio = true;
    }
    if (data.origin=='') {
      vacio = true;
    }
    return vacio;
  }
  //Añade el nuevo Character
  anadir(): void {
    const data = {
      id: this.characters.id,
      name: this.characters.name,
      status: this.characters.status,
      species: this.characters.species,
      gender: this.characters.gender,
      origin: this.characters.origin,
      image: this.characters.image + this.totChars + '.jpeg',
    };
    this.persService.nuevo(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //Modifica el Character
  editar(id: any) {
    const data = {
      id: this.characters.id,
      name: this.characters.name,
      status: this.characters.status,
      species: this.characters.species,
      gender: this.characters.gender,
      origin: this.characters.origin,
      image: this.characters.image + id + '.jpeg',
    };
    this.persService.edit(id, data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //Elimina el Character por ID
  eliminar(id: any) {
    this.persService.delete(id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
