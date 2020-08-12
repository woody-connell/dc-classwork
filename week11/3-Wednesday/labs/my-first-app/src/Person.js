


class Person {

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.count = 0;
  }

  greeting(){
    this.count++;
    console.log(`${this.firstName} ${this.lastName} count ${this.count}`);
  }

}



let woody = new Person('Woody', 'Connell');

woody.greeting();

let will = new Person('Will', 'Connell');

will.greeting();

