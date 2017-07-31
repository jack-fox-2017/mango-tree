"use strict"

// Release 2
class FruitTree {
  constructor(name, age, height, maxFruit, healthyStatus){
    this._name = name;
    this._age = age;
    this._height = height;
    // this._maxGrow = maxGrow;
    // this._maxAge = maxAge;
    this._maxFruit = maxFruit;
    // this._minAgeProduce = minAgeProduce;
    // this._healthyStatus = healthyStatus;
    this._fruitHarvested = [];
    // this._good = 0;
    // this._bad = 0;
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
    let rand = Math.floor(Math.random()*this._maxFruit)
    for (let i = 0; i < rand; i++) {
      this._fruitHarvested.push(new Mango())
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
  constructor(name, age, height, fruits, hStatus) {
    super(name, age, height, fruits, hStatus);
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
  constructor(name, age, height, fruits, hStatus) {
    super(name, age, height, fruits, hStatus);
    //this._name = 'Apple';
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

class PearTree extends FruitTree{
  constructor(name, age, height, fruits, hStatus){
    super(name, age, height, fruits, hStatus);
    //this._name = 'Pear';
  }
}

class Pear extends Fruit{
  constructor(){
    super();
  }
}

//driver code release 2
// let pearTree = new PearTree();
// let mangoTree = new MangoTree();
// let appleTree = new AppleTree();
//
// while (mangoTree._healthyStatus != false) {
//   mangoTree.grow();
//   mangoTree.harvest();
//   mangoTree.produceFruits();
//   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | ${MangoTree.name} harvested = ${mangoTree._fruits} (${mangoTree._good} good, ${mangoTree._bad} bad)`);
// };
// while (appleTree._healthyStatus != false) {
//   appleTree.grow();
//   appleTree.harvest();
//   appleTree.produceFruits();
//   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | ${AppleTree.name} harvested = ${appleTree._fruits} (${appleTree._good} good, ${appleTree._bad} bad)`);
// };
// while (pearTree._healthyStatus != false) {
//   pearTree.grow();
//   pearTree.harvest();
//   pearTree.produceFruits();
//   console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | ${PearTree.name} harvested = ${pearTree._fruits} (${pearTree._good} good, ${pearTree._bad} bad)`);
// };

// Release 3
class TreeGrove {
  constructor(){
    this._tree = [];
  }
  inputTree(name, age, height, fruits, hStatus){
    if(name == 'MangoTree'){
      this._tree.push(new MangoTree(name, age, height, fruits, hStatus));
    }
    if(name == 'AppleTree'){
      this._tree.push(new AppleTree(name, age, height, fruits, hStatus));
    }
    if(name == 'PearTree'){
      this._tree.push(new PearTree(name, age, height, fruits, hStatus));
    }
  }
  nextYear(){
    for(let i=0; i<this._tree.length; i++){
      this._tree[i].grow();
      this._tree[i].harvest();
      this._tree[i].produceFruits();
    }
  }
  showAges(){
    for(let i=0; i<this._tree.length; i++){
      console.log(this._tree[i]._age +' year(s)')
    }
  }
  showTrees(){
    for(let i=0; i<this._tree.length; i++){
      console.log('showTree: '+this._tree[i]._name)
    }
  }
  matureTrees(){
    for(let i=0; i<this._tree.length; i++){
      if(this._tree[i]._fruitHarvested.length > 0 && this._tree[i].healthyStatus != false){
        console.log(this._tree[i]._name + ' is mature');
      }
    }
  }
  deadTrees(){
    for(let i=0; i<this._tree.length; i++){
      if(this._tree[i].healthyStatus == false){
        console.log(this._tree[i]._name + ' is dead');
      }
    }
  }
}

//driver code release 3
let grove = new TreeGrove();
grove.inputTree('MangoTree', 3, 1.8, 7, true);
grove.inputTree('MangoTree', 5, 2.4, 12, true);
grove.inputTree('AppleTree', 5, 1.2, 5, true);
grove.inputTree('PearTree', 7, 2, 15, true);
grove.nextYear();
grove.showAges();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();

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
