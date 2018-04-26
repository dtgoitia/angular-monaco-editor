import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>I'm a child component!</h3>
    <h5>name: {{name}}</h5>
    `
})

export class ChildComponent {
  name = 'blah';
}
