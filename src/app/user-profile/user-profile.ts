import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';

@Component({
  selector: 'app-user-profile',
  imports: [Toolbar],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  titulo: string = "Usuario";
  mensaje: string = "";

  ngOnInit(): void {
    this.mensaje = `¡Hola desde ngOnInit! ${new Date()} `; 
    //  this.miServicio.obtenerDatos().subscribe(data => this.datos = data);
  }

  notificar(message: string) {
    console.log(message);
    // Perform actions based on the event
  }
}
