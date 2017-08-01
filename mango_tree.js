"use strict"

// // Release 2
class FruitTree {
  constructor(name, maxAge, middle, maxFruits){
    this._name = name
    this._age = 0
    this._height = 0
    this._health = true
    this._fruits = []
    this.maxAge = maxAge
    this.middle = middle
    this.harvested = ""
    this.maxFruits = maxFruits
  }

  getName(){
    return this._name
  }

  getAge(){
    return this._age++
  }

  getHeight(){
    return this._height
  }

  getTreeData(){
    return console.log(`Tree: ${this._nama}, Year: ${this._age}, ${this.harvested}`)
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
    let random = Math.floor(Math.random() * this.maxFruits)
    for(let i=0; i< random; i++){
      this._fruits.push(new Fruit())
    }
  }

  harvest(){
    var goodCount = 0
    var badCount = 0
    for(let i=0; i<this._fruits.length; i++){
      if (this._fruits[i].quality == "good") {
        goodCount++
      } else{
        badCount++
      }
    }
    this.harvested = `${this._fruits.length} (${goodCount} GOOD QUALITY , ${badCount} BAD QUALITY)`
    this._fruits = []
  }
}

class Fruit {
  constructor(){
    this.quality = Math.floor(Math.random() * 2) ? "good" : "bad"
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
  constructor(){
    super()
  }
}

// // Release 1
class AppleTree extends FruitTree{
  constructor(maxAge, middle) {
    super(maxAge, middle)
  }

}

class Apple extends Fruit{
  constructor(){
    super()
  }
}

class PearTree extends FruitTree{
  constructor(maxAge, middle) {
    super(maxAge, middle)
  }

}

class Pear extends Fruit{
  constructor(){
    super()
  }
}

//
// // Release 3
// class TreeGrove {}
class TreeGrove{
  constructor() {
    this.tree = []
  }

  inputTree(name, age, height, fruits, health){
    if(name === "MangoTree"){
      this.tree.push(new MangoTree(name, age, height, fruits, health))
    } else if(name === "AppleTree"){
      this.tree.push(new AppleTree(name, age, height, fruits, health))
    } else if(name === "AppleTree"){
      this.tree.push(new AppleTree(name, age, height, fruits, health))
    }else{
      return "nothing to do"
    }
    return this.tree
  }

  show_ages(){
    for(let i=0; i< this.tree.length; i++){
      this.tree[i].grow();
      console.log(`Pohon : ${this.tree[i]._name} \n Umur : ${this.tree[i]._age}`);
    }
  }

  show_tress(){
    return this.tree;
  }

  mature_trees(){
    for(let i = 0; i < this.tree.length;i++){
      this.tree[i].grow();
      this.tree[i].getTreeData();
    }
  }

  dead_trees(){
    for(let i = 0; i < this.tree.length;i++){
      do{
        this.tree[i].grow();
      } while(this.tree[i]._health != false)
        this.tree[i].getHealtyStatus();
    }
  }
}


//driver code untuk release 0
let mangoTree = new FruitTree('MangoTree', 20, 15, 10)
console.log(`Mango tree is alive. :smile:`);
do {
  mangoTree.getName();
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} REPORT] Height = ${mangoTree._height.toFixed(1)} meter | ${mangoTree._name} Fruit harvested = ${mangoTree.harvested}`)
} while (mangoTree.getHealtyStatus() != false)
console.log(`Mango tree has met its end. :sad:`);


let appleTree = new FruitTree('AppleTree', 10, 8, 8)
//console.log(appleTree.getName());
console.log(`${appleTree.name} tree is alive. :smile:`);
do {
  appleTree.getName()
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} REPORT] Height = ${appleTree._height.toFixed(1)} meter | ${appleTree._name} Fruit harvested = ${appleTree.harvested}`)
} while (appleTree.getHealtyStatus() != false)
console.log(`Apple tree has met its end. :sad:`);

let pearTree = new FruitTree('PearTree', 8, 6, 10)
//console.log(appleTree.getName());
console.log(`${pearTree.name} tree is alive. :smile:`);
do {
  pearTree.getName()
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} REPORT] Height = ${pearTree._height.toFixed(1)} meter | ${pearTree._name} Fruit harvested = ${pearTree.harvested}`)
} while (pearTree.getHealtyStatus() != false)
console.log(`Pear tree has met its end. :sad:`);

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 2, 1.8, 7,true)
grove.inputTree("AppleTree", 1, 2.4, 12,true)

console.log("- show next years -");
grove.show_ages()

console.log("- show trees -");
grove.show_tress()

console.log("-show mature tree-");
grove.mature_trees()

console.log("-show dead tree-");
grove.dead_trees();
