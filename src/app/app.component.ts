import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monaco Editor';
  editorOptions = {
    theme: 'vs-dark',
    language: 'json'
  };
  code = 'function x() {\n\tconsole.log("Hello world!");\n}';
}
