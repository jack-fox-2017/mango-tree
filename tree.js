"use strict"

class FruitTree {

  // Initialize a new MangoTree
  constructor(umur =0,tinggi =0,sehat = true, nama) {
    this.nama = nama;
    this.umur = umur;
    this.tinggi = tinggi;
    this.kumpulan = []; //array buah yang maksimalny si this.maxKapasitas pada saat umur tertentu
    this.harvested = null;
    this.sehat = sehat;
  }

  get Age() {
    return this.umur;
  }
  get Height() {
    return this.tinggi.toFixed(1);
  }
  get Fruits() {
    return this.kumpulan;
  }
  get healthyStatus() {
    return this.sehat;
  }
  // Get current states here

  // Grow the tree
  grow() {
    if (this.umur < 20) {
      if (this.umur == 19) {this.sehat = false;}
      this.umur++;
      if (this.tinggi < this.maxTinggi) {
        this.tinggi+= (Math.random()*2);
        if (this.tinggi>this.maxTinggi) {
          this.tinggi=this.maxTinggi;
        }
      }
    }
    return this;
  }

  // Produce some mangoes
  produceFruit() { //TAMBAHIN MANGO
    if (this.kumpulan.length<this.maxCap) {
      var addNew = Math.floor(Math.random()*this.maxCap)
      for (let i=0; i<addNew;i++) {
        this.kumpulan.push(new Fruit());
      }
    }
    return this.kumpulan;
  }

  // Get some fruits
  harvest() { // sekali harvest, smua buah di pohon itu habis -> this.kumpulan => empty array //    HITUNG YG MANA GOOD OR BAD
    var countAll = this.kumpulan.length;
    var countGood =0;
    var countBad = 0;
    for (let i=0; i<this.kumpulan.length;i++) {
       if (this.kumpulan[i].quality == 'good') {
         countGood ++;
       } else {countBad++;}
    }
    var result = `${countAll} (${countGood} good, ${countBad} bad)`
    this.kumpulan = [];
    this.harvested = result;
  }

}

class Fruit {
  // Produce a mango
  constructor() {
    this.quality = (Math.floor(Math.random()*2) != 1 ? 'good' : 'bad')
  }


}
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(umur =0,tinggi =0,sehat = true, nama='Mango') { // variables yang ada d parent
    super(umur,tinggi,sehat, nama) // variables yang ada d parent
    this.maxCap=30;
    this.maxTinggi = 18;
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

class AppleTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(umur =0,tinggi =0,sehat = true, nama='Apple') { // variables yang ada d parent
    super(umur,tinggi,sehat, nama) // variables yang ada d parent
    this.maxCap=20;
    this.maxTinggi = 15;
  }
}

class Apple {
  // Produce a mango
  constructor() {
  }
}


let tree = new MangoTree()
console.log(`The ${tree.nama} tree is alive! :smile:`)
 do {
  tree.grow();
  tree.produceFruit();
  tree.harvest();
  console.log(`[Year ${tree.umur} Report] Height = ${tree.Height} | ${tree.nama} Fruits harvested = ${tree.harvested}`)
  } while (tree.healthyStatus != false)

console.log(`The ${tree.nama} tree has met its end. :sad:`);
console.log('---------------------------------------------------------');

let appleTree = new AppleTree()
console.log(`The ${appleTree.nama} tree is alive! :smile:`)
 do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.Height} | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthyStatus != false)

console.log(`The ${appleTree.nama} tree has met its end. :sad:`);
console.log('---------------------------------------------------------');
