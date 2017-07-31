"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, healthyStatus) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._healthyStatus = healthyStatus;
    this._fruitHarvested = [];
    this._good = 0;
    this._bad = 0;
  }
  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruits;
  }
  getHealthyStatus() {
    return this._healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    if (this._age==20) {
      this._healthyStatus = false;
    }
    if(this._age<=10){
      this._height += Math.floor(Math.random() * 3);
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age>=3){
      for(let i=0; i<Math.floor(Math.random() * 10 + 2); i++){
        this._fruitHarvested.push(new Mango());
      }
    }
  }

  // Get some fruits
  harvest() {
    this._good = 0;
    this._bad = 0;
    for(let i=0; i<this._fruitHarvested.length; i++){
      if(this._fruitHarvested[i].quality=='good'){
        this._good++;
      }
      else{
        this._bad++;
      }
    }
    this._fruits = this._fruitHarvested.length;
    this._fruitHarvested = [];
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.fruitQuality();
  }
  fruitQuality(){
    let condition = ['good','bad'];
    let con = Math.floor(Math.random() * condition.length)
    if (con == 0) {
      return condition[0];
    }
    else {
      return condition[1];
    }
  }

}
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._fruits}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree {
  // Initialize a new AppleTree
  constructor(age, height, fruits, healthyStatus) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._healthyStatus = healthyStatus;
    this._fruitHarvested = [];
    this._good = 0;
    this._bad = 0;
  }
  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruits;
  }
  getHealthyStatus() {
    return this._healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    if (this._age==25) {
      this._healthyStatus = false;
    }
    if(this._age<=15){
      this._height += Math.floor(Math.random() * 3);
    }
  }

  // Produce some apples
  produceApples() {
    if(this._age>=3){
      for(let i=0; i<Math.floor(Math.random() * 10 + 2); i++){
        this._fruitHarvested.push(new Mango());
      }
    }
  }

  // Get some fruits
  harvest() {
    this._good = 0;
    this._bad = 0;
    for(let i=0; i<this._fruitHarvested.length; i++){
      if(this._fruitHarvested[i].quality=='good'){
        this._good++;
      }
      else{
        this._bad++;
      }
    }
    this._fruits = this._fruitHarvested.length;
    this._fruitHarvested = [];
  }
}
class Apple {
  constructor() {
    this.quality = this.fruitQuality();
  }
  fruitQuality(){
    let condition = ['good','bad'];
    let con = Math.floor(Math.random() * condition.length)
    if (con == 0) {
      return condition[0];
    }
    else {
      return condition[1];
    }
  }
}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}


let mangoTree = new MangoTree(0,0,0,true);
console.log('Mango Tree');
do{
  mangoTree.grow();
  mangoTree.harvest();
  mangoTree.produceMangoes();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._fruits} (${mangoTree._good} good, ${mangoTree._bad} bad)`)
}while(mangoTree._healthyStatus != false);
console.log('----------');
let appleTree = new AppleTree(0,0,0,true);
console.log('Apple Tree')
do{
  appleTree.grow();
  appleTree.harvest();
  appleTree.produceApples();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._fruits} (${appleTree._good} good, ${appleTree._bad} bad)`)
}while(appleTree._healthyStatus != false);
