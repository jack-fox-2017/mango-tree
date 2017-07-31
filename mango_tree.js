"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.maxBuah = 0;
    this.tampBuah = [];
    this.jmlBuahdipetik = 0;
    this.status = true;
  }

  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.tampBuah;
  }
  getHealtyStatus() {
    return this.status;
  }


  // Get current states here

  // Grow the tree
  grow() {
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
