"use strict"

// Release 2
class FruitTree {
  constructor(age=0, height=0, maxFruit=10, maxGrow=15, maxAge=20, minAgeProduce=2, healthyStatus=true){
    this._age = age;
    this._height = height;
    this._maxGrow = maxGrow;
    this._maxAge = maxAge;
    this._maxFruit = maxFruit;
    this._minAgeProduce = minAgeProduce;
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
    if (this._age==this._maxAge) {
      this._healthyStatus = false;
    }
    if(this._age<=this._maxGrow){
      this._height += Math.floor(Math.random() * 3);
    }
  }

  // Produce some fruits
  produceFruits() {
    if(this._age>=this._minAgeProduce){
      for(let i=0; i<Math.floor(Math.random() * this._maxFruit); i++){
        this._fruitHarvested.push(new Fruit());
      }
    }
  }

  // Get some fruits
  harvest() {
    this._good = 0;
    this._bad = 0;
    for(let i=0; i<this._fruitHarvested.length; i++){
      if(this._fruitHarvested[i]._quality=='good'){
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

class Fruit {
  constructor() {
    this._quality = this.fruitQuality();
  }
  fruitQuality(){
    let condition = ['good','bad'];
    let con = Math.floor(Math.random() * condition.length)
    if (con == 1) {
      return condition[1];
    }
    else {
      return condition[0];
    }
  }
}

// release 0

class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super(0,0,10,15,20,2);
    //this._name = 'Mango';
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
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
class AppleTree extends FruitTree{
  // Initialize a new AppleTree
  constructor() {
    super(0,0,13,15,25,3);
    //this._name = 'Apple';
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

class PearTree extends FruitTree{
  constructor(){
    super(0,0,15,18,30,1);
    //this._name = 'Pear';
  }
}

class Pear extends Fruit{
  constructor(){
    super();
  }
}

//driver code release 2
let pearTree = new PearTree();
let mangoTree = new MangoTree();
let appleTree = new AppleTree();

while (mangoTree._healthyStatus != false) {
  mangoTree.grow();
  mangoTree.harvest();
  mangoTree.produceFruits();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | ${MangoTree.name} harvested = ${mangoTree._fruits} (${mangoTree._good} good, ${mangoTree._bad} bad)`);
};
while (appleTree._healthyStatus != false) {
  appleTree.grow();
  appleTree.harvest();
  appleTree.produceFruits();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | ${AppleTree.name} harvested = ${appleTree._fruits} (${appleTree._good} good, ${appleTree._bad} bad)`);
};
while (pearTree._healthyStatus != false) {
  pearTree.grow();
  pearTree.harvest();
  pearTree.produceFruits();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | ${PearTree.name} harvested = ${pearTree._fruits} (${pearTree._good} good, ${pearTree._bad} bad)`);
};

// Release 3
class TreeGrove {}

//driver code release 1
// let _mangoTree = new MangoTree(0,0,0,true);
// console.log('Mango Tree');
// do{
//   mangoTree.grow();
//   mangoTree.harvest();
//   mangoTree.produceMangoes();
//   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._fruits} (${mangoTree._good} good, ${mangoTree._bad} bad)`)
// }while(mangoTree._healthyStatus != false);
// console.log('----------');
// let appleTree = new AppleTree(0,0,0,true);
// console.log('Apple Tree')
// do{
//   appleTree.grow();
//   appleTree.harvest();
//   appleTree.produceApples();
//   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._fruits} (${appleTree._good} good, ${appleTree._bad} bad)`)
// }while(appleTree._healthyStatus != false);
