"use strict"

class FruitTree {

  // Initialize a new MangoTree
  constructor(umur =0,tinggi =0,sehat = true, fruit, nama) {
    this.nama = nama;
    this.umur = umur;
    this.tinggi = tinggi;
    this.kumpulan = []; //array buah yang maksimalny si this.maxKapasitas pada saat umur tertentu
    this.harvested = null;
    this.fruit = this.produceFruit(fruit)
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
  produceFruit(fruit) { //TAMBAHIN MANGO
    if (this.kumpulan.length<this.maxCap) {
      var addNew = 0;
      if (fruit == null) {addNew = Math.floor(Math.random()*this.maxCap)} else {addNew = fruit;}
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
  constructor(umur =0,tinggi =0,sehat = true, fruit, nama='Mango') { // variables yang ada d parent
    super(umur,tinggi,sehat, fruit, nama) // variables yang ada d parent
    this.maxCap=30;
    this.maxTinggi = 15;
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

class AppleTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(umur =0,tinggi =0,sehat = true, fruit,nama='Apple') { // variables yang ada d parent
    super(umur,tinggi,sehat, fruit,nama) // variables yang ada d parent
    this.maxCap=20;
    this.maxTinggi = 15;
  }
}

class Apple {
  // Produce a mango
  constructor() {
  }
}

class PearTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(umur =0,tinggi =0,sehat = true,fruit, nama='Pear') { // variables yang ada d parent
    super(umur,tinggi,sehat, fruit,nama) // variables yang ada d parent
    this.maxCap=50;
    this.maxTinggi = 21;
  }
}

class Pear {
  // Produce a mango
  constructor() {
  }
}

// let tree = new MangoTree()
// console.log(`The ${tree.nama} tree is alive! :smile:`)
//  do {
//   tree.grow();
//   tree.produceFruit();
//   tree.harvest();
//   console.log(`[Year ${tree.umur} Report] Height = ${tree.Height} | ${tree.nama} Fruits harvested = ${tree.harvested}`)
//   } while (tree.healthyStatus != false)
//
// console.log(`The ${tree.nama} tree has met its end. :sad:`);
// console.log('---------------------------------------------------------');
//
// let appleTree = new AppleTree()
// console.log(`The ${appleTree.nama} tree is alive! :smile:`)
//  do {
//   appleTree.grow();
//   appleTree.produceFruit();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.Height} | Fruits harvested = ${appleTree.harvested}`)
//   } while (appleTree.healthyStatus != false)
//
// console.log(`The ${appleTree.nama} tree has met its end. :sad:`);
// console.log('---------------------------------------------------------');
//
// let pearTree = new PearTree()
// console.log(`The ${pearTree.nama} tree is alive! :smile:`)
//  do {
//   pearTree.grow();
//   pearTree.produceFruit();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.umur} Report] Height = ${pearTree.Height} | Fruits harvested = ${pearTree.harvested}`)
//   } while (pearTree.healthyStatus != false)
//
// console.log(`The ${pearTree.nama} tree has met its end. :sad:`);
// console.log('---------------------------------------------------------');

class TreeGrove {
  constructor() {
    this.collection =[];
  }
  inputTree(treeName, treeUmur, treeTinggi, treeFruit, treeSehat) {
    if (treeName == 'MangoTree') {
      this.collection.push(new MangoTree(treeUmur,treeTinggi, treeSehat, treeFruit));
    }
    if (treeName == 'AppleTree') {
      this.collection.push(new AppleTree(treeUmur,treeTinggi, treeSehat, treeFruit));
    }
    if (treeName == 'PearTree') {
      this.collection.push(new PearTree(treeUmur,treeTinggi, treeSehat, treeFruit));
    }
    console.log(this.collection);
  }

  show_ages(){
    var ages = [];
    for(let i=0; i<this.collection.length; i++) {
      var obj ={};
      obj['Name'] = this.collection[i].nama
      obj['umur'] = this.collection[i].umur
      ages.push(obj)
    }
    console.log(ages);
  }
  show_trees(){
    var listofTrees = [];
    for(let i=0; i<this.collection.length; i++) {
      listofTrees.push(this.collection[i].nama)
    }
    console.log('list of trees'+listofTrees);

  }
  mature_trees(){
    var listofMatureTrees = [];
    for(let i=0; i<this.collection.length; i++) {
      if (this.collection[i].kumpulan != []) {
      listofMatureTrees.push(this.collection[i].nama+' Tree')
      }
    }
    console.log(`List of Mature Trees: ${listofMatureTrees}`);
  }
  dead_trees(){
    var listofDeadTrees = [];
    for(let i=0; i<this.collection.length; i++) {
      if (this.collection[i].sehat == false) {
      listofDeadTrees.push('Dead: '+this.collection[i].nama+' Tree')
      }
    }
    console.log(`List of Dead Trees: ${listofDeadTrees}`);
  }
  nextYear(){
    for(let i=0; i<this.collection.length; i++) {
    this.collection[i].grow();
    this.collection[i].produceFruit();
    }
  }

}

let tree = new TreeGrove();
tree.inputTree('MangoTree', 19, 1.8, 7, true);
tree.inputTree('MangoTree', 3, 1.8, 7, true);
// tree.inputTree('PearTree', 2, 1.8, 9, true);
// console.log(tree.inputTree('AppleTree', 4, 1.2, 5, true));
// tree.inputTree('PearTree', 35, 1.8, 19, true);
//
//
tree.nextYear();
tree.show_ages();
tree.mature_trees();
tree.dead_trees();

tree.nextYear();
tree.show_ages();
tree.mature_trees();
tree.dead_trees();
// console.log(tree.dead_trees);
// tree.mature_trees();
// tree.dead_trees();
