
function hellow(){
    console.log('HELLOW WORLD')
}
hellow()
//emni function
function addition(a,b,c){
    console.log(a+b+c)
}
addition(10,20,30)

function subtraction(a,b,c){
    console.log(a-b-c)
}
subtraction(10,20,30)
addition(100,200,300)

    // javascript class

                     //Arrays


var names = ['Almamun','Sharder',1990,'Teacher','Barishal',false];
console.log(names[2]) //array er location khoj korah.
console.log(names.length) //array teh total koytah element ase tah ber korah.

names[2] = 'Babu' // 1 number index ei notun ektah string add korah.
//names[8] = 'Marry' // array er extra string soho dekha.
names[names.length] = 'Marry' // array er last ei ektah string add korah.
console.log(names) // array cheack korah.

//  DIfferent Data Types
var address = ['Almamun','Sharder',1990,'Teacher','Barishal',false,'designer'];
address.push('Blue') // Notun ekta string add korah.
address.push('Yellow') 
address.unshift('Mr.') // array er first element hisabe add korah.
address.unshift('Holah')
address.pop() // Array theake Last elemnt ber koreh deoya.
address.pop()
address.shift() // array theake first element ber koreh deoya.
address.shift()
console.log(address)

console.log(address.indexOf('Barisha'))

var indesigner = address.indexOf('designer') === -1 ? 'AL-MAMUN IS NOT A DESIGNER' : 'AL-MAMUN IS GOOD A DESIGNER' 
// OPORER VARIABLE TAH HOLOH array theake compair korah
console.log(indesigner)
 
   // LOOPS FOR LOOPS AND NAMTAR WORK
   
   var namta = 100
   for( var i = 1; i <= 10; i++){
       console.log(namta + ' X ' + i + ' = ' + namta*i)
   }

   // loops in array!

   var looparray = ['Mohammad','Al-mamun','Tech',22,1999,'Muladi','Barishal']
   for (var i = 0; i<looparray.length;i++){
       console.log(looparray[i])
   }
     
//    ektah vinno dhormih 
 
 for (var i = 1; i < 20; i+=2){
     console.log(i)
 }

// motamuti done

var a = ['alim','dar',2020,'dart',false]
var b=['hoga','moga']
a.push(b);
b.shift()
b.pop()
console.log(a);
console.log(a.length)

// 1 array inserted 2 valus

// BASIC OPERATOR 

var now = 2021
var jhon = 38
var mun = 21 ;

console.log(now - jhon)
console.log(typeof a)
// Grater less?

var x,y,z
x = 2020
y = 28
z = 20

console.log(x-y)

console.log(x-2)
console.log(x*2)
console.log(x/2)
var compair = y > z 
console.log(compair)
var type = "mohammad almamoon"
console.log( type.length)

// ekhane all mathmetical operator

// BOOLEAN LOGIC

var typeHolder = "ALMAMUN"
var equal =16
var age = 16
 if (age > 20){
     console.log("ALmamun is unfullfilled")
 }else if(age > 20 || age < equal){
    console.log("ALmamun is fullfilled")
 }else if (age >= 20 && age <= equal || age <=equal){
    console.log("ALmamun is POORMAN")
 }else{
    console.log("ALmamun is Pushed")
 }

//  if elase work complited||

