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
})
