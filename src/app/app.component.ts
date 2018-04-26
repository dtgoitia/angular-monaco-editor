import { Component } from '@angular/core';
import { NgxEditorModel  } from 'ngx-monaco-editor';
import { DialogueSchemaComponent } from './components/dialogue-schema.component';

import { ChildComponent } from './components/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Monaco Editor';
  editorOptions = {
    // theme: 'vs-dark',
    theme: 'vs-dark',
    languages: 'json',
    // lineHeight: number,
    // multiCursorModifier: "altKey",
    minimap: {
      enabled: false
    },
    renderWhitespace: 'all'

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
