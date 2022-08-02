import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../../models/Person";
import {PersonSelectComponent} from "../person-select/person-select";

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.html',
  styleUrls: ['./person-viewer.css']
})
export class PersonViewerComponent implements OnInit {
  @Input()
  person: Person;

  @Output()
  personSelected = new EventEmitter<Person>();

  constructor(private sup: PersonSelectComponent) {
  }

  ngOnInit() {
  }
}
