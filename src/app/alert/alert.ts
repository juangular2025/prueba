import { Component } from '@angular/core';
import { AlertBase } from '../alert-base/alert-base';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert extends AlertBase {
  constructor() {
    super();
  }
  alert = this.alerta;
}
