"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(name) {
    this.name = name
    this.age = 0
    this.max_age = 20
    this.height = 1
    this.max_height = 100
    this.fruits = []
    this.total_fruits = 0
    this.status = true
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {
    return this.fruits
  }
  getHealtyStatus() {
    return this.status
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.age+=1
    let growRandom = Math.random()*(this.max_height*0.8)/90
    if (this.height < this.max_height) {
      this.height += parseFloat(growRandom.toFixed())
    }
    if(this.height >= this.max_height){
      this.height = this.max_height
    }
    if(this.age >= this.max_age){
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes(ageStartProduce) {
    let goFruit = Math.ceil(Math.random() * 10);
    if (this.age >= ageStartProduce) {
      for (let i = 0; i < goFruit; i++) {
        this.fruits[i] = new Mango();
      }
    }
  }

  // Get some fruits
  harvest() {
    let countGood = 0;
    let countBad = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality == true) {
        countGood++;
      } else countBad++;
    }
    this.result = `${this.fruits.length} `
    this.print = `(${countGood} good, ${countBad} bad) |`
    this.fruits = [];
  }


}
class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.qualityFactor();
  }
  qualityFactor() {
    let random = Math.ceil(Math.random()*2);
    if (random == 1) {
      return true }
      else {false}
  }
}
  // * driver code untuk release 0
  let mangoTree = new MangoTree("mango")
  do {
  mangoTree.grow();
  mangoTree.produceMangoes(4);
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.result} ${mangoTree.print}`)
} while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
