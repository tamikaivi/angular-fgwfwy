import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Pantalla1Component } from './pantall1/pantalla1/pantalla1.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div style="background-color: red; height: 800px; display: flex; flex-direction: column">
  <div style="background-color: green">dsfsdf</div>
  <div style="background-color: yellow">ds4554</div>
  <div
      style="
          background-color: pink;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: stretch;
      "
  >
      final
      <div style="background-color: red; display: block; margin: 1rem">input</div>
      <div
          style="
          background-color: red;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: stretch;
          margin: 1rem;
          "
      >
          tabla
          <div style="background-color: red; margin: 1rem">Cabecera</div>
          <div style="background-color: blue; height: 100%; display: flex; margin: 1rem">Cuerpo</div>
      </div>
  </div>
</div>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
