export class Person {

  id: number;
  name: string;
  dateOfBirth: Date;
  email: string;

  static fromJson(obj: any): Person {
    const result = new Person();
    result.id = obj.id;
    result.name = obj.name;
    result.dateOfBirth = obj.dateOfBirth;
    result.email = obj.email;

    return result;
  }
}
