import { Component, Input } from '@angular/core';
import { PersonajesService } from 'src//app/services/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {
  //array que contiene el detalle completo del personaje
  data: any = [];
  id: any = this.persService.id; //id que se obtiene del servicio

  constructor(private persService: PersonajesService) {}

  //detalle completo al cargar el componente
  ngOnInit() {
    if (this.id != 0) {
      this.persService
        .detalleId(this.id)
        .subscribe((result) => (this.data = result));
    }
  }
}
