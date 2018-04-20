import { Component } from '@angular/core';
import { NgxEditorModel  } from 'ngx-monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Monaco Editor';
  editorOptions = {
    // theme: 'vs-dark',
    theme: 'vs-light',
    language: 'markdown'
  };
  editorContent = `{
  "p1": 123,
  "p2": true,
  "p3": "blah"
}`;
  editorModel: NgxEditorModel = {
    value: this.editorContent,
    language: 'json',
    uri: 'foo.json'
  };
}
