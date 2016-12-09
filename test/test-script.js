/*jshint esversion: 6 */
const chai = require('chai');
const Zombies = require('../zombies');
chai.should();

describe("Item", () => {

  let item = Zombies.item;
  let stick;
  beforeEach(() => {
     stick = new item("stick");
  });

  it("should be a class", () => {
    item.should.be.a.function
  });

  it("should have one parameter", () => {
    stick.name.should.be.a.parameter
  });

  it("Item should have a name equal to its parameter?", () => {
    stick.name.should.equal("stick");
  });
});

describe("Weapon", () => {

  let weapon = Zombies.weapon;
  let lightSaber;
  beforeEach(() => {
    lightSaber = new weapon("Green Saber", 100);
  });
  it("should be a class", () => {
    lightSaber.should.be.a.function
  });
  it("should have parameters name and damage", () => {
    lightSaber.should.have.property.name
    lightSaber.should.have.property.damage
    Object.keys(lightSaber).length.should.equal(2)
  });
  it("should have a name", () => {
    lightSaber.name.should.equal("Green Saber");
  });
  it("damage should be a number", () => {
    lightSaber.damage.should.be.a("number");
  });
  it("Weapon should be an instance of Item", () => {
    lightSaber.should.be.an.instanceof(Zombies.item)
 })
});
