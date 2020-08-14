class Button {
  constructor() {
    this.count = 0;
  }
  count_method(){
    this.count++;
    console.log(this.count);
  }
}

let button1 = new Button();
let button2 = new Button();

