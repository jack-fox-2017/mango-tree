"use strict"

class FruitTree {
  constructor() {
    this._umur = 0
    this._tinggi = 0
    this._maksUmur = Math.floor((Math.random() * (((10-5)+1) + 1)))
    this._maksUmurTumbuh = 0
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

  //grow the tree
  grow() {
    //this._umur += 1
    // umur pohon berhenti bertambah tinggi
    if (this._umur === this._maksUmur) {
      this._statusKesehatan = false
      if(this._umur<=this._maksUmurTumbuh) {
        this._tinggi += Math.floor((Math.random() * (((200-10)+1) + 1)))
      }
    } else if (this._maksUmurTumbuh>=this._umur && this._statusKesehatan !== false) {
      this._tinggi += Math.floor((Math.random() * (((200-10)+1) + 1)))
    }
    this._umur += 1
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

// release 0

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(umurAwal=0,tinggiPohon=0,buahAwal=0,status=true) {
    super()
    this._tinggi = tinggiPohon*100
    this._umur = umurAwal
    this._maksUmurTumbuh = 4 // dalam tahun
    this._statusKesehatan = status
    this.produceMangoes(buahAwal)
  }
  // Produce some mangoes
  produceMangoes(buahAwal=0) {
    var totalBuah = Math.floor(Math.random() * (((20-1)+1) + 1)) + buahAwal
    for (var i = 0; i <= totalBuah; i++) {
      this._kumpulanBuah.push( new Mango())
    }
  }

}

class Mango {
  // Produce a mango
  constructor() {
    // asign math random method Math.floor(Math.random() * ((y-x)+1) + x); X is bottom Y is highest
    var randomQuality = Math.floor(Math.random() * (((1-0)+1) + 0))
    this.quality = randomQuality===1?'good':'bad';
  }
}


// Pohon Apple
class AppleTree extends FruitTree{
    // Initialize a new AppleTree
    constructor(umurAwal=0,tinggiPohon=0,buahAwal=0,status=true) {
      super()
      this._tinggi = tinggiPohon*100 //dalam cm
      this._umur = umurAwal
      this._maksUmurTumbuh = 5 // dalam tahun
      this._statusKesehatan = status
      this.produceApples(buahAwal)
    }

    // Produce some mangoes
    produceApples(buahAwal=0) {
      var totalBuah = Math.floor(Math.random() * (((8-1)+1) + 1)) + buahAwal
      for (var i = 0; i <= totalBuah; i++) {
        this._kumpulanBuah.push( new Apple())
      }
    }

}
class Apple {
  // Produce a Apple
  constructor() {
    // asign math random method Math.floor(Math.random() * ((y-x)+1) + x); X is bottom Y is highest
    var randomQuality = Math.floor(Math.random() * (((1-0)+1) + 0))
    this.quality = randomQuality===1?'good':'bad';
  }
}

// Pohon Apple
class PearTree extends FruitTree{
    // Initialize a new AppleTree
    constructor(umurAwal=0,tinggiPohon=0,buahAwal=0,status=true) {
      super()
      this._tinggi = tinggiPohon*100 //dalam cm
      this._umur = umurAwal
      this._maksUmurTumbuh = 5 // dalam tahun
      this.producePear(buahAwal)
      this._statusKesehatan = status
    }

    // Produce some mangoes
    producePear(buahAwal=0) {
      var totalBuah = Math.floor(Math.random() * (((8-1)+1) + 1)) +buahAwal
      for (var i = 0; i <= totalBuah; i++) {
        this._kumpulanBuah.push( new Pear())
      }
    }

}
class Pear {
  // Produce a Apple
  constructor() {
    // asign math random method Math.floor(Math.random() * ((y-x)+1) + x); X is bottom Y is highest
    var randomQuality = Math.floor(Math.random() * (((1-0)+1) + 0))
    this.quality = randomQuality===1?'good':'bad';
  }
}


let mangoTree = new MangoTree()
let appleTree = new AppleTree()


// console.log((`mangoTree`));
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree._umur} Report] Height = ${mangoTree._tinggi/100} m | Fruits harvested = ${mangoTree._jumlahDipetik[0]} (${mangoTree._jumlahDipetik[2]} good, ${mangoTree._jumlahDipetik[1]} bad)`)
// } while (mangoTree._statusKesehatan != false)
// console.log(`the tree has met its end.`);

// console.log((`appleTree`));
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree._umur} Report] Height = ${appleTree._tinggi/100} m | Fruits harvested = ${appleTree._jumlahDipetik[0]} (${appleTree._jumlahDipetik[2]} good, ${appleTree._jumlahDipetik[1]} bad)`)
// } while (appleTree._statusKesehatan != false)
// console.log(`the tree has met its end.`);



class TreeGrove {
  constructor() {
    this._kumpulanPohon = []
  }
  inputTree(string,umurAwal,tinggiPohon,buahAwal,status) {
    if(string==='MangoTree') {
      this._kumpulanPohon.push(
        new MangoTree(umurAwal,tinggiPohon,buahAwal,status))
    } else if (string==='AppleTree'){
      this._kumpulanPohon.push(new AppleTree(umurAwal,tinggiPohon,buahAwal,status))
    } else if (string==='PearTree'){
      this._kumpulanPohon.push(new PearTree(umurAwal,tinggiPohon,buahAwal,status))
    }
    return this._kumpulanPohon[0]['_umur']
  }

  // next year
  nextYear() {
    for(let i=0; i<this._kumpulanPohon.length; i++){
      this._kumpulanPohon[i].grow()
    }
    return this._kumpulanPohon[0]['_umur']
  }

  // show trees age
  showAge(){
    for(let i=0; i<this._kumpulanPohon.length; i++){
      console.log(this._kumpulanPohon[i].getAge());
    }
  }

  //show trees
  showTrees(){
    console.log(`Pohon yang ada di kebun`);
    for(let i=0; i<this._kumpulanPohon.length; i++){
      console.log(`${i+1}:`,this._kumpulanPohon[i].constructor.name);
    }
  }

  mature_trees(){
    console.log(`Pohon yang sedang berbuah`);
    for(let i=0; i<this._kumpulanPohon.length; i++){
      if (this._kumpulanPohon[i]['_kumpulanBuah'].length !==0) {
        console.log(`Sedang berbuah`,this._kumpulanPohon[i].constructor.name);
      }
    }
  }

  dead_trees(){
    console.log(`Pohon yang mati`);
    for(let i=0; i<this._kumpulanPohon.length; i++){
      if (this._kumpulanPohon[i]['_statusKesehatan'].length ===false) {
        console.log(`Pohon mati: `,this._kumpulanPohon[i].constructor.name);
      }
    }
  }
}

var treeGrove = new TreeGrove()

treeGrove.inputTree('MangoTree',3,1.8,7,true)
treeGrove.inputTree('MangoTree',5,2.4,12,true)
treeGrove.inputTree('AppleTree',4,1.4,5,true)
treeGrove.inputTree('AppleTree',4,1.4,5,true)

console.log(treeGrove.nextYear());
treeGrove.showAge();
treeGrove.showTrees();
treeGrove.mature_trees()
treeGrove.dead_trees()
// console.log(treeGrove.inputTree('MangoTree',3,1.8,7,true));



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
