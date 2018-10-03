var pokemonModule = function(inName, inHealth) {
  var name = inName;
  var health = inHealth;

  function sayHello() {
    console.log("hello i'm", name);
  }

  function updateHealth(inNum) {
    health += inNum;
    console.log(health);
  }

  function getHealth() {
    return health;
  }

  return {
    sayHello: sayHello,
    updateHealth: updateHealth,
    getHealth: getHealth
  }
}
var pikachu = new pokemonModule('pikachu', 100);
pikachu.sayHello();
pikachu.updateHealth(100);

console.log(pikachu.getHealth());
