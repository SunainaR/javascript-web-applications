class CounterModel {
  constructor() {
    this.counter = 0;
  }

  getCounter() {
    console.log(this.counter);
    return this.counter;
    
  }

  increment() {
    
    this.counter++;
  }

  decrement() {
    
    this.counter--;
  }
}

module.exports = CounterModel;
