/*jshint esversion: 6 */
const chai = require('chai');
const Zombies = require('../zombies');
chai.should();
let Item = Zombies.item;
let Weapon = Zombies.weapon;
let Food = Zombies.food;

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
    pizza.should.have.property("energy", 100)
    Object.keys(pizza).length.should.equal(2)
  });
  it("should have a name", () => {
    pizza.name.should.equal("Pizza")
  });
  it("should be an instance of Item", () => {
    pizza.should.be.an.instanceof(Item)
  });
});




