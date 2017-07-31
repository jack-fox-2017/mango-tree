"use strict"

// release 0

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor() {
    super()
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }

  getFruits() {
    return this._maxQty
  }
  getHealtyStatus() {
    //return this._health
    if(this._age < 20){
      return true
    }else{
      return false
    }
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age ++
    var random = (Math.random() * 1)
    if(this._age <= 10){
      this._height += Number(random)
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._manggo = new Mango();
    this._maxQty =  this._manggo.getFruits();
    this._bad = this._manggo.getBad();
    this._good = this._manggo.getGood();

    return this._maxQty;

  }

  // Get some fruits
  harvest() {
    return this.produceMangoes()
  }

}

class Mango {
  // Produce a mango
  constructor(){
      this._maxQty = Math.floor((Math.random() * 9) + 1);
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


  //driver code untuk release 0
  let mangoTree = new MangoTree()
  console.log(`The tree is alive. :smile:`);
  do {
    mangoTree.grow();
    //console.log(mangoTree.getHeight());
    mangoTree.produceMangoes();
    //mangoTree.harverst();
    console.log(`[Year ${mangoTree._age} REPORT] Height = ${mangoTree._height.toFixed(1)} meter | Fruits harvested = ${mangoTree.harvest()} ( ${mangoTree._good} GOOD QUALITY, ${mangoTree._bad} BAD QUALITY )`)
  } while (mangoTree.getHealtyStatus() != false)
  console.log(`The tree has met its end. :sad:`);



// // Release 1
class AppleTree extends FruitTree{
  constructor(){
    super()
  }

  getHealtyStatus(){
    if(this._age < 10){
      return true
    } else{
      return false
    }
  }

  grow(){
    this._age++
    var random = Math.random() * 1
    if(this._age <=5){
      this._height += Number(random)
    }
  }

}

class Apple{
  constructor(){
    this._maxQty = Math.floor((Math.random() * 6) + 1);
    this._bad = Math.floor((Math.random() * this._maxQty) + 1);
    this._good  = this._maxQty - this._bad;
  }

}

let appleTree = new AppleTree()
console.log(`Apple tree is alive. :smile:`);
do {
  appleTree.grow();
  //console.log(mangoTree.getHeight());
  appleTree.produceFruits();
  //mangoTree.harverst();
  console.log(`[Year ${appleTree._age} REPORT] Height = ${appleTree._height.toFixed(1)} meter | Fruits harvested = ${appleTree.harvest()} ( ${appleTree._good} GOOD QUALITY, ${appleTree._bad} BAD QUALITY )`)
} while (appleTree.getHealtyStatus() != false)
console.log(`Apple tree has met its end. :sad:`);


// // Release 2
class FruitTree {
  constructor(){
    this._age = 0
    this._height = 0
    this._maxQty = 0
    this._health = true
    this._fruits = 0
    this._good = 0
    this._bad = 0
  }

  getAge(){
    return this._age++
  }
  getHeight(){
    return this._height
  }
  getFruit(){
    return this._maxQty
  }

  produceFruits(){
    this._fruits = new Apple();
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
  constructor(){

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
//
// // Release 3
// class TreeGrove {}
