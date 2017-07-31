"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._umur = 0
    this._tinggi = Math.floor((Math.random() * (((200-10)+1) + 1)))
    this._maksUmur = Math.floor((Math.random() * (((10-5)+1) + 1)))
    this._kumpulanBuah = []
    this._jumlahDipetik = []
    this._statusKesehatan = true
  }

  getAge() {
    return this._umur
  }
  getHeight() {
    return this._tinggi
  }
  getFruits() {
    return this._kumpulanBuah
  }
  getHealtyStatus() {
    return this._statusKesehatan
  }
  // Get current states here
  // Grow the tree
  grow() {
    var tempUmur = this._umur
    this._umur += 1
    // umur pohon berhenti bertambah tinggi
    if (this._umur > this._maksUmur) {
      this._statusKesehatan = false
    } else if (tempUmur<this._umur) {
      this._tinggi += Math.floor((Math.random() * (((200-10)+1) + 1))) // tambah tinggi per Meter
    }
  }

  // Produce some mangoes
  produceMangoes() {
    var totalBuah = Math.floor(Math.random() * (((5-1)+1) + 1))
    for (var i = 0; i <= totalBuah; i++) {
      this._kumpulanBuah.push( new Mango())
    }
  }

  // Get some fruits
  harvest() {
    // refresh value _jumlahDipetik
    this._jumlahDipetik = []

    //push total buah yang dipunya
    this._jumlahDipetik.push(this._kumpulanBuah.length)

    // Menentukan buah bagus atau buruk dan memasukkan kedalam array _jumlahDipetik
    this.getStatusBuah()

    // refresh param _kumpulanBuah
    this._kumpulanBuah = []
  }

  getStatusBuah() {
    var good = 0
    var bad = 0
    for (var i = 0; i < this._kumpulanBuah.length; i++) {
      if(this._kumpulanBuah[i]['quality'] === 'good') {
        good ++
      } else {
        bad ++
      }
    }

    this._jumlahDipetik.push(good)
    this._jumlahDipetik.push(bad)
  }

}

class Mango {
  // Produce a mango
  constructor() {
    // usign math random method Math.floor(Math.random() * ((y-x)+1) + x); X is bottom Y is highest
    var randomQuality = Math.floor(Math.random() * (((1-0)+1) + 0))
    this.quality = randomQuality===1?'good':'bad';
  }
}

class AppleTree {

    // Initialize a new MangoTree
    constructor() {
      this._umur = 0
      this._tinggi = Math.floor((Math.random() * (((200-10)+1) + 1)))
      this._maksUmur = Math.floor((Math.random() * (((10-5)+1) + 1)))
      this._kumpulanBuah = []
      this._jumlahDipetik = []
      this._statusKesehatan = true
    }

    getAge() {
      return this._umur
    }
    getHeight() {
      return this._tinggi
    }
    getFruits() {
      return this._kumpulanBuah
    }
    getHealtyStatus() {
      return this._statusKesehatan
    }


    // Get current states here
    // Grow the tree
    grow() {
      var tempUmur = this._umur
      this._umur += 1
      // umur pohon berhenti bertambah tinggi
      if (this._umur > this._maksUmur) {
        this._statusKesehatan = false
      } else if (tempUmur<this._umur) {
        this._tinggi += Math.floor((Math.random() * (((200-10)+1) + 1))) // tambah tinggi per Meter
      }
    }

    // Produce some mangoes
    produceMangoes() {
      var totalBuah = Math.floor(Math.random() * (((5-1)+1) + 1))
      for (var i = 0; i <= totalBuah; i++) {
        this._kumpulanBuah.push( new Mango())
      }
    }

    // Get some fruits
    harvest() {
      // refresh value _jumlahDipetik
      this._jumlahDipetik = []

      //push total buah yang dipunya
      this._jumlahDipetik.push(this._kumpulanBuah.length)

      // Menentukan buah bagus atau buruk dan memasukkan kedalam array _jumlahDipetik
      this.getStatusBuah()

      // refresh param _kumpulanBuah
      this._kumpulanBuah = []
    }

    getStatusBuah() {
      var good = 0
      var bad = 0
      for (var i = 0; i < this._kumpulanBuah.length; i++) {
        if(this._kumpulanBuah[i]['quality'] === 'good') {
          good ++
        } else {
          bad ++
        }
      }

      this._jumlahDipetik.push(good)
      this._jumlahDipetik.push(bad)
    }

}

class Apple {
  // Produce a mango
  constructor() {
    // usign math random method Math.floor(Math.random() * ((y-x)+1) + x); X is bottom Y is highest
    var randomQuality = Math.floor(Math.random() * (((1-0)+1) + 0))
    this.quality = randomQuality===1?'good':'bad';
  }
}


let mangoTree = new MangoTree()
let appleTree = new AppleTree()


console.log((`mangoTree`));
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._umur} Report] Height = ${mangoTree._tinggi/100} m | Fruits harvested = ${mangoTree._jumlahDipetik[0]} (${mangoTree._jumlahDipetik[2]} good, ${mangoTree._jumlahDipetik[1]} bad)`)
} while (mangoTree._statusKesehatan != false)
console.log(`the tree has met its end.`);

console.log((`appleTree`));
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree._umur} Report] Height = ${appleTree._tinggi/100} m | Fruits harvested = ${appleTree._jumlahDipetik[0]} (${appleTree._jumlahDipetik[2]} good, ${appleTree._jumlahDipetik[1]} bad)`)
} while (appleTree._statusKesehatan != false)
console.log(`the tree has met its end.`);



/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}
