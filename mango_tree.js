"use strict"

// // Release 2
class FruitTree {
  constructor(maxAge, middle){
    this._age = 0
    this._height = 0
    this._maxQty = 0
    this._health = true
    this._fruits = 0
    this._good = 0
    this._bad = 0
    this.maxAge = maxAge
    this.middle = middle
    this.harvested = 0
  }

  getAge(){
    return this._age++
  }
  getHeight(){
    return this._height
  }
  getFruits(){
    return this._maxQty
  }

  getHealtyStatus() {
    //return this._health
    if(this._age < this.maxAge){
      return true
    }else{
      return false
    }
  }

  grow() {
    this._age ++
    var random = (Math.random() * 1)
    if(this._age <= this.middle){
      this._height += Number(random)
    }
  }

  //Produce Fruits Manggo, Apple
  produceFruits(){
    this._fruits = new Fruit();
    this._maxQty =  this._fruits.getFruits();
    this._bad = this._fruits.getBad();
    this._good = this._fruits.getGood();

    return this._maxQty
  }

  harvest(){
    return this.produceFruits()
  }

}

class Fruit {
  constructor(n){
    this.n = n
    this._maxQty = Math.floor((Math.random() * n) + 1);
    this._bad = Math.floor((Math.random() * this._maxQty) + 1);
    this._good  = this._maxQty - this._bad;
  }
  getFruits() {
    return this._maxQty;
  }

  getBad(){
    return this._bad;
  }

  getGood(){
    return this._good;
  }
}
// release 0

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(maxAge, middle) {
    super(maxAge, middle)
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor(n){
    super(n)
  }
}

// // Release 1
class AppleTree extends FruitTree{
  constructor(maxAge, middle) {
    super(maxAge, middle)
  }

}

class Apple extends Fruit{
  constructor(n){
    super(n)
  }
}

//
// // Release 3
// class TreeGrove {}

//driver code untuk release 0
let mangoTree = new FruitTree(20, 15)
let nManggo = new Fruit(9)
console.log(`The tree is alive. :smile:`);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  console.log(`[Year ${mangoTree._age} REPORT] Height = ${mangoTree._height.toFixed(1)} meter | Fruits harvested = ${mangoTree.harvest()} ( ${nManggo._good} GOOD QUALITY, ${nManggo._bad} BAD QUALITY )`)
} while (mangoTree.getHealtyStatus() != false)
console.log(`The tree has met its end. :sad:`);


let appleTree = new FruitTree(10, 8)
let nApple = new Fruit(6)
console.log(`Apple tree is alive. :smile:`);
do {
  appleTree.grow();
  appleTree.produceFruits();
  console.log(`[Year ${appleTree._age} REPORT] Height = ${appleTree._height.toFixed(1)} meter | Fruits harvested = ${appleTree.harvested} ( ${nApple._good} GOOD QUALITY, ${nApple._bad} BAD QUALITY )`)
} while (appleTree.getHealtyStatus() != false)
console.log(`Apple tree has met its end. :sad:`);
