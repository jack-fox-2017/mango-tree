"use strict"

class FruitTree {
    // Initialize a new MangoTree
  constructor(name, age = 0, height = 0) {
    this._name = name
    this._age = age
    this._height = height
    
    this._fruits = []
    this._harvested = null;

    // this._maxHeightGrow = maxHeightGrow
    // this._maxAge = maxAge
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
    return this._age < this._maxAge ? true : false
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

    return this
  }

  // Produce some mangoes
  produceFruits() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Mango())
    }

    return this
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

    return this
  }
}

class Fruit {
  constructor() {
    this._quality = Math.floor(Math.random()*2) ? 'good' : 'bad'
  }
}

//

class MangoTree extends FruitTree {
  constructor(name, age, height, fruits, isHealthy) {
    super(name, age, height)
    this._maxHeightGrow = 20
    this._maxAge = 10
    this._fruitMax = 10

    for (let i = 0; i < fruits; i++)
      this._fruits.push(new Mango())
    
    this._age = isHealthy ? this._age : this.maxAge
  }

}

class Mango extends Fruit {
  constructor() {
    super()
    this._taste = 'manis'
  }
}

class AppleTree extends FruitTree {
  constructor(name, age, height, fruits, isHealthy) {
    super(name, age, height)
    this._maxHeightGrow = 16
    this._maxAge = 6
    this._fruitMax = 11

    for (let i = 0; i < fruits; i++)
      this._fruits.push(new Apple())

    this._age = isHealthy ? this._age : this.maxAge
  }
}

class Apple extends Fruit {
  constructor() {
    super()
    this._taste = 'asam'
  }
}

class PearTree extends FruitTree {
  constructor(name, age, height, fruits, isHealthy) {
    super(name, age, height)
    this._maxHeightGrow = 13
    this._maxAge = 8
    this._fruitMax = 16

    for (let i = 0; i < fruits; i++)
      this._fruits.push(new Pear())

    this._age = isHealthy ? this._age : this.maxAge
  }
}

class Pear extends Fruit {
  constructor() {
    super()
    this._taste = 'begitulah'
  }
}

// driver code untuk release 0
// let mangoTree = new MangoTree(2, 4, 23)
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree.getHeight()} | Fruits harvested = ${mangoTree._harvested}`)
// } while (mangoTree.getHealthyStatus() != false)

class TreeGrove {
  constructor() {
    this._trees = []
  }

  inputTree(name, age, height, fruits, isHealthy) {
    let tree;

    switch(name) {
      case 'MangoTree': 
        tree = new MangoTree(name, age, height, fruits, isHealthy)
        break;
      case 'AppleTree':
        tree = new AppleTree(name, age, height, fruits, isHealthy)
        break;
      case 'PearTree':
        tree = new PearTree(name, age, height, fruits, isHealthy)
        break;
      default:
        return 'tree undefined'
        break;
    }

    this._trees.push(tree)
  }

  nextYear() {
    this._trees.map(item => {item.grow().produceFruits()})
  }

  showAges() {
    console.log( this._trees.map(item => {return `${item._name}: ${item._age}`}).join(', ') )
  }

  showTrees() {
    console.log( this._trees.map(item => {return `${item._name}`}).join(', ') )
  }

  matureTrees() {
    console.log( this._trees.filter(item => {return item._fruits.length > 0}).map(item => {return `${item._name}`}).join(', ') )
  }

  deadTrees() {
    console.log( this._trees.filter(item => {return item.getHealthyStatus() == false}).map(item => {return `${item. _name}`}).join(', ') )
  }
}

let grove = new TreeGrove()
grove.inputTree('MangoTree', 3, 1.8, 7, true)
grove.inputTree('MangoTree', 5, 2.4, 12, true)
grove.inputTree('AppleTree', 5, 1.2, 5, true)
grove.inputTree('PearTree', 7, 2, 15, true)

grove.nextYear()

grove.showAges()

grove.showTrees()

grove.matureTrees()

grove.deadTrees()