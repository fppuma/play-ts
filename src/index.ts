class Customer {

  constructor(private name: string, age: number) { }
}

const john = new Customer('John Smith', 35);
console.log(JSON.stringify(john));
