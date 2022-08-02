import {BehaviorSubject, Observable} from 'rxjs';
import {Person} from '../models/Person';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

const SERVER_URL = 'http://localhost:8080/person';

@Injectable()
export class PeopleService {

  private peopleSubject: BehaviorSubject<Person[]>;

  constructor(private http: HttpClient) {
    this.peopleSubject = new BehaviorSubject<Person[]>([]);
    this.refresh();
  }

  refresh(): void {
    console.log('refreshing people ' + this.peopleSubject.value.length);
    this.getAllPeople()
      .subscribe(people => this.peopleSubject.next(people));
    console.log('refreshed people ' + this.peopleSubject.value.length);
  }

  getAllPeople(): Observable<Person[]> {
    console.log('Get All People Called');
    return this.http.get<any[]>(SERVER_URL)
      .pipe(map(json => json.map(Person.fromJson)));
  }

  get people(): Observable<Person[]> {
    return this.peopleSubject;
  }

  update(person: Person): Observable<number> {
    console.log('updating people ' + this.peopleSubject.value.length);
    return this.http.put<number>(SERVER_URL + '/' + person.id, person)
      .pipe(tap(i => this.refresh()));
  }

  add(person: Person): Observable<Person> {
    console.log('add people ' + this.peopleSubject.value.length);
    return this.http.put<Person>(SERVER_URL + '/' + person.id, person);
  }
}
