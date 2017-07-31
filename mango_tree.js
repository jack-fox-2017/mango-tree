"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0, fruitMax = 10) {
    this._age = age
    this._height = height
    this._fruitMax = fruitMax
    
    this._fruits = []
    this._harvested = null;

    this._maxHeightGrow = 10
    this._maxAge = 14
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height.toFixed(1)
  }
  getFruits() {
    return this._fruits.join(',')
  }
  getHealthyStatus() {
    return this._age <= this._maxAge ? true : false
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if (this._age <= this._maxHeightGrow) {
      this._height += Math.random()*2
      if (this._height > this._maxHeightGrow)
        this._height = this._maxHeightGrow
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    let fruitsCount = this._fruits.length
    let fruitsQuality = {
      good: 0,
      bad: 0
    }

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'good')
        fruitsQuality.good++
      else
        fruitsQuality.bad++

      this._fruits.shift()
    }

    this._harvested = `${fruitsCount} (${fruitsQuality.good} good, ${fruitsQuality.bad} bad)`
    
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = Math.floor(Math.random()*2) ? 'good' : 'bad'
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree(2, 4, 23)
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree.getHeight()} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.getHealthyStatus() != false)
  

// Release 1
class AppleTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0, fruitMax = 13) {
    this._age = age
    this._height = height
    this._fruitMax = fruitMax
    
    this._fruits = []
    this._harvested = null;

    this._maxHeightGrow = 13
    this._maxAge = 8
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height.toFixed(1)
  }
  getFruits() {
    return this._fruits.join(',')
  }
  getHealthyStatus() {
    return this._age <= this._maxAge ? true : false
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if (this._age <= this._maxHeightGrow) {
      this._height += Math.random()*2
      if (this._height > this._maxHeightGrow)
        this._height = this._maxHeightGrow
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    let fruitsCount = this._fruits.length
    let fruitsQuality = {
      good: 0,
      bad: 0
    }

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'good')
        fruitsQuality.good++
      else
        fruitsQuality.bad++

      this._fruits.shift()
    }

    this._harvested = `${fruitsCount} (${fruitsQuality.good} good, ${fruitsQuality.bad} bad)`
    
  }

}
class Apple {
  constructor() {
    this._quality = Math.floor(Math.random()*2) ? 'good' : 'bad'
    this._
  }
}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
