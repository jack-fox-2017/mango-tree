// YANG RELEVANT: tree.js

// "use strict"
//
// // release 0
//
// // Math.random() untuk mengatur smua characters di constructor
// class MangoTree {
//
//   // Initialize a new MangoTree
//   constructor(umur =0,tinggi =0,sehat = true, maxTinggi = 5, maxCap=15 ) {
//     this.umur = umur;
//     this.maxCap=maxCap;
//     this.tinggi = tinggi;
//     this.maxTinggi = maxTinggi;
//     this.kumpulan = []; //array buah yang maksimalny si this.maxKapasitas pada saat umur tertentu
//     this.harvested = null;
//     this.sehat = sehat;
//   }
//
//   get Age() {
//     return this.umur;
//   }
//   get Height() {
//     return this.tinggi.toFixed(1);
//   }
//   get Fruits() {
//     return this.kumpulan;
//   }
//   get healthyStatus() {
//     return this.sehat;
//   }
//   // Get current states here
//
//   // Grow the tree
//   grow() {
//     if (this.umur < 20) {
//       if (this.umur == 19) {this.sehat = false;}
//       this.umur++;
//       if (this.tinggi < this.maxTinggi) {
//         this.tinggi+= (Math.random()*2);
//         if (this.tinggi>this.maxTinggi) {
//           this.tinggi=this.maxTinggi;
//         }
//       }
//     }
//     return this;
//   }
//
//   // Produce some mangoes
//   produceMangoes() { //TAMBAHIN MANGO
//     if (this.kumpulan.length<this.maxCap) {
//       var addNew = Math.floor(Math.random()*this.maxCap)
//       for (let i=0; i<addNew;i++) {
//         this.kumpulan.push(new Mango());
//       }
//     }
//     return this.kumpulan;
//   }
//
//   // Get some fruits
//   harvest() { // sekali harvest, smua buah di pohon itu habis -> this.kumpulan => empty array //    HITUNG YG MANA GOOD OR BAD
//     var countAll = this.kumpulan.length;
//     var countGood =0;
//     var countBad = 0;
//     for (let i=0; i<this.kumpulan.length;i++) {
//        if (this.kumpulan[i].quality == 'good') {
//          countGood ++;
//        } else {countBad++;}
//     }
//     var result = `${countAll} (${countGood} good, ${countBad} bad)`
//     this.kumpulan = [];
//     this.harvested = result;
//   }
//
// }
//
// class Mango {
//   // Produce a mango
//   constructor() {
//     this.quality = (Math.floor(Math.random()*2) != 1 ? 'good' : 'bad')
//   }
//
//
// }
//
//
// // var tree = new MangoTree()
// console.log(`The tree is alive! :smile:`)
// // let mangoTree = new MangoTree()
// // console.log(mangoTree.grow());
// // console.log(mangoTree.umur);
// // console.log(mangoTree.tinggi);
// // console.log(mangoTree.grow());
// // console.log(mangoTree.umur);
// // console.log(mangoTree.tinggi);
// // console.log(mangoTree.grow());
// // console.log(mangoTree.umur);
// // console.log(mangoTree.tinggi);
// // console.log(mangoTree.grow());
// // console.log(mangoTree.umur);
// // console.log(mangoTree.tinggi);
// // console.log(mangoTree.produceMangoes());
// // console.log(mangoTree.umur);
// // console.log(mangoTree.tinggi);
// // console.log(mangoTree.kumpulan);
// // console.log(mangoTree.harvest());
// // console.log(mangoTree.umur);
// // console.log(mangoTree.tinggi);
// // console.log(mangoTree.kumpulan);
// console.log(`The tree is alive! :smile:`)
// let mangoTree = new MangoTree()
//  do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.Height} | Fruits harvested = ${mangoTree.harvested}`)
//   } while (mangoTree.healthyStatus != false)
//
// console.log(`The tree has met its end. :sad:`);
//
// // console.log(tree.grow());
// // tree.produceMangoes();
//  // console.log(mangoResult[0].quality);
//
// // console.log(tree.harvest());
//
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
//
// // MATURE TREES KALO BUAH NYA DA BKN 0
