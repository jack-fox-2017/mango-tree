"use strict"

class MangoTree {

 // Initialize a new MangoTree
 constructor() {
       this._umur = 0;
       this._tinggi = getRandomHeight();
       this._qty = 0
       this._health = true;
       this._bad = 0;
       this._good = 0;
       this._manggo = 0;
 }

 //Get current states here


 // Grow the tree
 grow(){

   this._umur++;
     if(this._umur <= 10)
     {
       this._tinggi += getRandomHeight();
     }


     if(this._umur  == 20)
     {
       this._health = false;

     }
 }

 // Produce some mangoes
 produceMangoes() {

     this._manggo = new Manggo();

     this._qty =   this._manggo.getFruits();
     this._bad = this._manggo.getBad();
     this._good = this._manggo.getGood();

     return this._qty;
 }

 // Get some fruits
 harvest() {

     return this.produceMangoes();
 }
}

class Manggo{

   constructor(){

       this._qty = Math.floor((Math.random() * 9) + 1);
       this._bad = Math.floor((Math.random() * this._qty) + 1);
       this._good  = this._qty - this._bad;

   }

   getFruits() {
         return this._qty;
   }

   getBad(){

       return this._bad;
   }

   getGood(){
       return this._good;
   }

}

function getRandomHeight(){

     var num = Math.random() * 1;
     return num;

}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
   tree.grow();
   tree.produceMangoes();

   console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(2)} Meter | Fruits Harvested = ${tree.harvest()} (${tree._bad} BAD QUALITY , ${tree._good} GOOD QUALITY)`);
} while (tree._health != false)

console.log(`The tree has met its end. :sad:`);
