import { Component, OnInit } from '@angular/core';
import { DialogueSchemaService } from './../../services/dialogue-schema.service';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dialogue-schema',
  templateUrl: './dialogue-schema.component.html'
})

export class DialogueSchemaComponent implements OnInit {
  public foods;
  constructor(private _dialogueSchemaService: DialogueSchemaService) { }
  public Foo() {
    alert('boooo!!');
  }
  ngOnInit() {
    console.log('DialogueSchemaComponent: OnInit');
    this.getFoods();
  }
  getFoods() {
    console.log('DialogueSchemaComponent.getFoods()');
    this._dialogueSchemaService.getFoods().subscribe(
      data => { this.foods = data; },
      err => console.log(err),
      () => console.log('done loading foods')
    );
  }
}
