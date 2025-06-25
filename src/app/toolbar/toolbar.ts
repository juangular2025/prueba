import { Component, input, computed, Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {


  // Declare an input named 'titulo' with a default value of ''.
  titulo = input<string>('Título por defecto')
  // Declare a required input named value. Returns an `InputSignal<number>`.
  value = input.required<number>();

  // Create a computed expression that reads the titulo input
  label = computed(() => `<= ${this.titulo()}`);

  // You can alternatively declare component inputs by adding the @Input decorator to a property:
  @Input() numero = 0;

  // You can specify the required option
  @Input({ required: true }) edad = 0;

  // Custom events are primarily used to enable communication 
  // from a child component to its parent component. 

  // In the child component, you declare a property using the output() function 
  // (or the @Output() decorator with EventEmitter). 
  // This property represents the custom event that the child component can emit.
  eventoNotificar = output<string>(); // Defines a custom event named 'eventoNotificar'

  notifyParent() {
    this.eventoNotificar.emit('Mensaje para el componente padre'); // Emits the custom event    
  }

}
