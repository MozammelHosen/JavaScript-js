
// -----varible----

var myFriends = 30;
var myFriend = 50;
var total = myFriends + myFriend;
console.log(total)

var myFriendns = 'akash';
console.log(myFriendns)

// ----Varible Show----

var myFriendi = 'akshh'
console.log( typeof myFriendi)

// -----Number-----

var myNumber = 12555455;
console.log(myNumber)

// ----boolean----

var a = 20;
var b = 50;
var total = a>b
console.log(total)

var a = 20;
var b = 50;
var total = a<b
console.log(total)

// ----up-lowcaser----

// var upType = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available';

// console.log(upType.toUpperCase())

var loType = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available';

console.log(loType.toLowerCase())

// ----indexof----
var myIndex = ' shakil robi tronmoy kamrul sohedul';
console.log(myIndex.indexOf('t'))

// -----split----

var myFr = 'ishan,tonmoy,akash,fahira';
console.log(myFr.split('tonmoy'))


// ----parseFloat----

var num1 = 700;
var num2 = 600;
var total = num1 * num2;
console.log(total)

// ----if----

// var a = 10;
// var b = 30;
// if(a>b){
//    console.log ('Hello World');
// }
// if(a<b){
//    console.log('hello World')
// }

// -----if else----

var a = 10;
var b = 30;
if(a<b){
   console.log ('Hello World1');
}
else{
   console.log('hello World2')
}

// -----if stament----

var x = 50;
var y = 50;
if(x<y){
   console.log('Hello Akash')
}
else if(x<y){
   console.log('Hello Mam')
}
else{
   console.log('The best Programmer')
}

var x = 10;
var y = 50;
if(x<y){
   console.log('Hello Akash');
}
else if(x<y){
   console.log('Hello Mam');
}
else{
   console.log('The best Programmer');
}
// ----switch----
var sum = 50;
switch(sum){
   case 20:
     console.log('Hello Javascript');
     break;
   case 30:
      console.log('Hello Js');
      break;
   case 50:
      console.log('hello javascript');
      break;
   default:
      console.log('Miss Javascript');
      
}
// ----Date----

// const even = new Date();
// console.log(even.toTimeString());

const even = new Date();
console.log(even.toLocaleTimeString());
console.log(even.getMonth());
console.log(even.getDate());
console.log(even.getFullYear());
console.log(even.getTimezoneOffset());

// -----Array----

var fName = ['akash','Sultan','toto'];
console.log(fName[1]);
console.log(fName[2]);

// ----Array pop----
var faName =['akash','Sultan','toto','tonmoy'];
faName.pop()
console.log(faName);

// -----Arraypup----
var fName = ['akash','Sultan','toto'];
fName.push('tonmoy');
console.log(fName);

// -----shift----

var fName = ['akash','Sultan','toto'];
fName.shift();
console.log(fName);

// ----unshift----

var fName = ['akash','Sultan','toto'];
fName.unshift('Fariya');
console.log(fName);

// ----slice----

var fName = ['akash','Sultan','toto','Fariya'];
console.log(fName.slice(1,2));

// -----splice----

var fName = ['akash','Sultan','toto'];
fName.splice(0,1, 'Javascript');
console.log(fName);

// ---- loop---

// for(var sum = 0; sum <=20; sum++ ){
//    console.log(sum);
// }

for(var sum = 0; sum < 200; sum++ ){
    console.log('Hello World');
}

var Num = [1,2,3,4,5,6,7,8,9]
for( var i = 1; i <Num.length ; i++ ){
    console.log(Num[i]);
}

// -----White loop---

var i = 0;

while(i < 10){
   console.log('Hello Javascript');
   i++
}
var i = 0;

while(i < 10){
   console.log([i]);
   i++
}

// -----Function----

// var num1 = 20;
// var num2 = 40;
// console.log(num1 + num2);

// function myFuntion(){
//    var num1 = 2000202;
//    var num2 = 400;
//    console.log(num1 * num2);
// }
// myFuntion();

// function myFuntion(num1, num2){
//    var total = num1 + num2;
//    console.log(total);

// }
// myFuntion(50,80);
// myFuntion(5000,80);
// myFuntion(50005,80);

function myFuntion(num1){
   var total = num1 * 10;
   return total;
}

var a = myFuntion(20);
var b = myFuntion(30536525);
console.log(a/b);

// ----object----

var myInfo = {yourName:'Mozammel' , village:'Faridpur', phone:01786238789 };
console.log(myInfo.village);
console.log(myInfo.phone);

// -----continue----

for(var i = 0; i <10 ; i++ ){
   if(i == 5){
      console.log('Hello Javascrip Programmer');
   } 
   console.log(i);
}
// -----var----

var num1 = 20;
var num2 = 60;
console.log(num1 + num2);