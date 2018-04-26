import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DialogueSchemaService } from './services/dialogue-schema.service';

/* components */
import { AppComponent } from './app.component';
// import { ChildComponent } from './components/child/child.component';
import { DialogueSchemaComponent } from './components/dialogue-schema/dialogue-schema.component';

/* Modules */
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    function createDependencyProposals() {
      // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
      // here you could do a server side lookup
      return [
        {
          label: '"lodash"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'The Lodash library exported as Node.js modules.',
          insertText: '"lodash": "*"'
        },
        {
          label: '"express"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'Fast, unopinionated, minimalist web framework',
          insertText: '"express": "*"'
        },
        {
          label: '"mkdirp"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'Recursively mkdir, like <code>mkdir -p</code>',
          insertText: '"mkdirp": "*"'
        }
      ];
    }
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: function (model, position) {
        // find out if we are completing a property in the 'dependencies' object.
        const textUntilPosition = model.getValueInRange({
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });
        const match = textUntilPosition.match(/"dependencies"\s*:\s*{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*("[^"]*)?$/);
        if (match) {
          return createDependencyProposals();
        }
        return [];
      }
    });
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
  declarations: [AppComponent, DialogueSchemaComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
    HttpClientModule,
  ],
  providers: [DialogueSchemaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
