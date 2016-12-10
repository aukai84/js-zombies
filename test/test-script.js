/*jshint esversion: 6 */
const chai = require('chai');
const Zombies = require('../zombies');
chai.should();
let Item = Zombies.item;
let Weapon = Zombies.weapon;
let Food = Zombies.food;
let Player = Zombies.player;

describe("Item", () => {

  let stick;
  beforeEach(() => {
     stick = new Item("stick");
  });

  it("should be a class", () => {
    Item.should.be.a.function
  });

  it("should have one parameter", () => {
    stick.name.should.be.a.parameter
  });

  it("Item should have a name equal to its parameter?", () => {
    stick.name.should.equal("stick");
  });
});

describe("Weapon", () => {
  let lightSaber;
  beforeEach(() => {
    lightSaber = new Weapon("Green Saber", 100);
  });
  it("should be a class", () => {
    Weapon.should.be.a.function
  });
  it("should have parameters name and damage", () => {
    lightSaber.should.have.property("name")
    lightSaber.should.have.property("damage", 100)
    Object.keys(lightSaber).length.should.equal(2)
  });
  it("should have a name", () => {
    lightSaber.name.should.equal("Green Saber");
  });
  it("damage should be a number", () => {
    lightSaber.damage.should.be.a("number");
  });
  it("Weapon should be an instance of Item", () => {
    lightSaber.should.be.an.instanceof(Item)
  });
  it("Weapon should extend Items prototype", () => {
    Weapon.prototype.should.be.an.instanceof(Item)
  });
});

describe("Food", () => {
  let pizza;
  beforeEach(() => {
    pizza = new Food("Pizza", 100);
  });
  it("should be a class", () => {
    Food.should.be.a.function
  });
  it("should have two parameters name and energy", () => {
    pizza.should.have.property("name")
    pizza.should.have.property("energy")
    Object.keys(pizza).length.should.equal(2)
  });
  it("energy should be a nubmer", () => {
    pizza.energy.should.be.a("number")
  });
  it("should have a name", () => {
    pizza.name.should.equal("Pizza")
  });
  it("should be an instance of Item", () => {
    pizza.should.be.an.instanceof(Item)
  });
  it("should extend the prototype of Item", () => {
    Food.prototype.should.be.an.instanceof(Item)
  });
});

describe("Player", () => {
  let aukai;
  beforeEach(() => {
    aukai = new Player("Aukai", 100, 1000, 10000);
  });
  it("should be a class", () => {
    Player.should.be.a.funcion
  });
  it("should have parameters, name, health, strengh, speed", () => {
    aukai.should.have.property("name")
    aukai.should.have.property("health")
    aukai.should.have.property("strength")
    aukai.should.have.property("speed")
    //Object.keys(aukai).length.should.equal(8)
  });
  it("should have a name", () => {
    aukai.name.should.equal("Aukai")
  });
  it("should have prive pack property as array", () => {
    aukai._pack.should.exist
    aukai._pack.should.be.an("array")
  });
  it("should have private property maxHealth", () => {
    aukai._maxHealth.should.exist
    aukai._maxHealth.should.be.a("number")
  });
  it("should have property isAlive which is true", () => {
    aukai.isAlive.should.exist
    aukai.isAlive.should.equal(true)
  });
  it("should have equipped property which is false", () => {
    aukai.equipped.should.exist
    aukai.equipped.should.equal(false)
  });
  it("should have method getPack which shows pack", () => {
    aukai.getPack.should.not.be.undefined
    aukai.getPack.should.be.a.function
    aukai.getPack().should.be.an("array")
  });
  it("should have method getMaxHealth which shows health", () => {
    aukai.getMaxHealth.should.not.be.undefined
    aukai.getMaxHealth.should.be.a.function
    aukai.getMaxHealth().should.be.a("number")
    aukai.getMaxHealth().should.be.at.least(aukai.health)
  })
  it("should have a method checkPack which prints your pack", () => {
    aukai.checkPack.should.not.be.undefined
    aukai.checkPack.should.be.a.function
  })
});




