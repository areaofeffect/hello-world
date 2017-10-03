var pokemonModule = function(inName) {
  this.name = inName;
  this.health = 100;
  
  function sayHello() {
    console.log("hello i'm", this.name);
  }
  
  function updateHealth(num) {
    this.health += num;
  }
  
  return {
    "sayHello": sayHello,
    "updateHealth": updateHealth,
    health: this.health,
    name: this.name
  }
}
var pikachu = new pokemonModule('pikachu');
pikachu.sayHello();
pikachu.updateHealth(10);
console.log(pikachu.health);