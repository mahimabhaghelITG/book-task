function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);
  let x = 10;
  // Here x is 10
  
  {
  let x = 2;
  // Here x is 2
  document.getElementById("demoone").innerHTML = x;
  }

  // You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

  document.getElementById("demo").innerHTML = cars;