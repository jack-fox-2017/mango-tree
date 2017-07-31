"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.maxFruits = 10;
    this.collected = [];
    this.harvested = 0;
    this.healthyStatus = true

  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {
    return this.collected
  }
  getHealtyStatus() {
    if(this.healthyStatus) {
      return 'good'
    } else {
      return 'bad'
    }

  }


  // Get current states here

  // Grow the tree
  grow() {

    if (this.getAge() < 20) {
      var num =  Math.random()*1
      this.age++;
      this.height += num
    } else {
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this.getHealtyStatus() === 'good') {
      let num = Math.floor(Math.random()*this.maxFruits)
      for (var i = 0; i < num; i++) {
        this.collected.push(new Mango())
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    for (var i = 0; i < this.collected.length; i++) {
      if (this.collected[i].quality === 'good') {
        good++
      } else {bad++}
    }
    this.harvested= `${this.collected.length} (good: ${good}, bad: ${bad})`;
    this.collected = []
  }
}//end of Class

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.checkQuality ()
  }

  checkQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random == 1) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
} //end of Class


  // * driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
