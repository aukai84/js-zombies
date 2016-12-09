/*jshint esversion: 6 */
const chai = require('chai');
const Zombies = require('../zombies');
chai.should();

describe("Item", () => {

  let item = Zombies.item;

  it("should be a class", () => {
    item.should.be.a.function
  });

  it("should have one parameter", () => {
    let stick = new item("stick");
    stick.name.should.equal("stick");
  })
});;
