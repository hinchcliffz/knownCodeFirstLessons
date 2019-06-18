// Function

// Contains data we will use contained in a Class
class Hero {
  // Instantiate an new class
  constructor(name) {
    this.name = name;
  }
  waveHey() {
    console.log(this.name + ' waves hey!');
  }
}
// Instantiate a class and have skills
let drew = new Hero({ name: 'drew' });
drew.waveHey();
