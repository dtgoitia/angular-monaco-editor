import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* components */
import { AppComponent } from './app.component';
import { MonacoEditorModule, NgxMonacoEditorConfig  } from 'ngx-monaco-editor';


const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    const id = 'foo.json';
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: false,
      schemas: [{
        uri: 'http://www.mocky.io/v2/5ad98cf42f00004800cfddb9',
        fileMatch: [id],
        schema: {
          'type': 'object',
          'properties': {
            'p1': {
              'type': 'number'
            },
            'p2': {
              'type': 'boolean'
            },
            'p3': {
              'type': 'string'
            },
            'nodes': {
              'type': 'array',
              'minItems': 1,
              'items': {
                'anyOf': [
                  {
                    '$ref': '#/definitions/nodes/blah'
                  }
                ]
              }
            }
          },
          'additionalProperties': false,
          'required': [
            'p1',
            'p2',
            'p3',
            'nodes'
          ],
          'definitions': {
            'nodes': {
              'blah': {
                'type': 'object',
                'properties': {
                  'thing': {
                    'type': 'string'
                  },
                  'value': {
                    'type': 'number'
                  }
                },
                'additionalProperties': false
              }
            }
          }
        }
      }]
    });
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
