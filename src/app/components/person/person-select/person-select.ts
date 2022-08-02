import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../../models/Person";
import {PeopleService} from "../../../services/people.service";

@Component({
  selector: 'app-person-select',
  templateUrl: './person-select.html',
  styleUrls: ['./person-select.css']
})
export class PersonSelectComponent implements OnInit {
  @Output() personUpdated = new EventEmitter<Person>();
  people: Person[];

  personSelected: Person;


  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.personSelected = null;
    this.peopleService.people
      .subscribe(people => this.people = people);
  }

  applyChanges() {

    this.personSelected.name = ((document.getElementById('editName') as HTMLInputElement).value);

    this.peopleService.update(this.personSelected).subscribe(() => this.personUpdated.emit(this.personSelected));
  }

  addNewPerson() {
    console.log('add new contractor called');

    const newPerson = new Person();

    newPerson.id = this.people.length;
    newPerson.name = ((document.getElementById('addName') as HTMLInputElement).value);
}
