// alert("hello js");
var A = 10;
// console.log(A); // we use consol.log print anything we want and we can see that in console the our page
// var person = {
//     nom: "achraf",
//     age: "24",
//     city: "sale"
// }
// alert(person.nom)
//     // window.alert("I really love pizza");
//alert and window.alert same thing do same fonctionality display a message on our page
// dat type : String , numbers , Booleans 
// let present = true;
// let FirstName = "Bro"
// let age = 23;
// console.log(present);
// document.getElementById("p1").innerHTML = "Hello " + FirstName;
// document.getElementById("p2").innerHTML = "you are my  " + FirstName;
// document.getElementById("p3").innerHTML = "you are " + age + " year";
// // opertator arithemetic
// student = 20;
// student +=1;
// student -=1;
// student *=1;
// student /=1;
// student %=2;
// console.log(student);

//How to accept user input
//1 -Easy Way with a window prompt
// let username = window.prompt("What's your name");
// console.log(username);
//2-Diffucult way with HTML textbox
// let user;
// document.getElementById("mybutton").onclick = function() {

// user = document.getElementById("mytext").value;
// if (user == 0) {
//     // alert("value empty")
//     console.log("it's empty nothing show on your console");
// } else {
//     console.log(user);
//     // alert(user);
// }

// document.getElementById("alabel1").innerHTML = user;
// }

//type conversion : change the datatype of a value to another
//    (Strings , numbers ,Booleans)
// let Age = window.prompt("how old are you");
// //1-convert string to a number
// console.log(typeof Age);
// Age =Number(Age);//casting
// Age += 1;
// console.log(typeof Age);
// // console.log("happy birthday you are",Age,"years old");
// let x;
// let y;
// let z;
// x=Number("3.14");
// y=String(3.14);
// z=Boolean("a");// if I insert value inside output True but if I left her empty output false
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

// Const a variable can't be change
// const PI=3.14159;
// let radius;
// let circumference;
// radius=window.prompt("enter the radius of circle");
// radius=Number(radius);
// circumference=2*PI*radius;
// console.log("the Value of circumference is :  ",circumference);

// Math function like max min count round
// let X=3.14;
// let Y = 4.99;
// let Z;
// let f=3;
// let g=9;
// let e=-5;
// let maximum;
// let minimum;
// round 3.x =4 when x>=5;
//floor 2.99 =2
//ceil 2.23=3
//  X =Math.round(X);
//  console.log(X);
// Y=Math.floor(Y);
// console.log(Y);
// Z=Math.ceil(X);
// console.log(Z);
// f=Math.pow(f,2);
// console.log(f);
// g=Math.sqrt(g);
// console.log(g);
// e=Math.abs(e);
// console.log(e);
// maximum=Math.max(f,g);
// minimum=Math.min(f,g);
// console.log("max between this two number is : ",maximum);
// console.log("min between this two number is : ",minimum)

// hypotenuse calc practice program 
// let a;
// let b;
// let c;
/*
a=window.prompt("enter a number");
a=Number(a);

b=window.prompt("enter b number");
b=Number(b);

c=Math.pow(a,2) + Math.pow(b,2)
c=Math.sqrt(c);
console.log("Side C : ",c);
*/

// document.getElementById("submitbutton").onclick = function(){
//     a=document.getElementById("atexbox").value;
//     a=Number(a);

//     b=document.getElementById("btexbox").value;
//     b=Number(b);

//     c=Math.pow(a,2) + Math.pow(b,2);
//     c=Math.sqrt(c);
//     document.getElementById("alabel3").innerHTML = "Side C is :  " + c;
// }

// let count =0;
// document.getElementById("decrease").onclick = function(){
//     count -=1;
//     document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("reset").onclick = function(){
//     count =0;
//     document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("increase").onclick = function(){
//     count +=1;
//     document.getElementById("countlabel").innerHTML = count;
// }

// Random method
// x=Math.random();
// // console.log(x);
//     // number between 0 and 6
// let number1 
// let number2 
// let number3 
// console.log(number1);
// console.log(number2);
// console.log(number3);
//  document.getElementById("mybutton").onclick = function () {
//      number1 =Math.floor(Math.random()*6)+1;
//      number2 =Math.floor(Math.random()*6)+1;
//      number3 =Math.floor(Math.random()*6)+1;

//      document.getElementById("alabel").innerHTML =number1;
//      document.getElementById("blabel").innerHTML = number2;
//      document.getElementById("clabel").innerHTML = number3;

//  }

// useful string method

//  let firstn= "Achraf";
//  let phonenumber = "06-44-09-10-28"
//  let length = firstn.length;
//  console.log(length);
//  console.log(firstn.charAt(0));//print first caracter
//  console.log(firstn.indexOf("f"));//index the caracter f
//  console.log(firstn.lastIndexOf("a"));//last index of a
//  console.log(firstn);
//  console.log(firstn.toUpperCase());//ACHRAF
//  console.log(firstn.toLowerCase());//achraf
//  phonenumber1=phonenumber.replaceAll("-","/");//we use replaceAll when we want repalce value by another value
// console.log(phonenumber);
// console.log(phonenumber1);

//Slice() method : extract a section of a string and returns it as a new string , without modifying the original string  
// let full_name = "Achraf Bogryn";
// let First_name;
// let Last_name;
//  FirstName=full_name.slice(0,6);
//  Last_name=full_name.slice(7);
//  Last_name=full_name.slice(full_name.indexOf(" ")+ 1);
//  First_name=full_name.slice(0,full_name.indexOf(" ")+1);
//  console.log(Last_name);
//  console.log(First_name);

// methode chaining : calling one method after another in one continuous line of code

// let Name = "achraf";
// let letter = Name.charAt(1).toUpperCase();

// console.log(letter); 

// let myage = window.prompt();
// myage=Number(myage);

// if(myage >20){
//     console.log("you are an adoult");
// } 
// else{
//     console.log("you are a child");
// }

// check property : give us boolean value true or false

// document.getElementById("mybutton").onclick= function(){

//     const mycheckbox = document.getElementById("mychekbox");
//     const mastercard = document.getElementById("mastercardbtn")
//     const visacard = document.getElementById("visabtn");
//     const paypalcard = document.getElementById("paypalbtn");

// if(mycheckbox.checked ){
//     console.log("you are subscribed !");
// }

//  else {
//    console.log("you are not subscribed !");  

//  }

//  if(visacard.checked){
//     console.log("you are paying with visacard");
//  }
//  else if(mastercard.checked){
//     console.log("you are paying with master card");
//  }
//     else if (paypalcard.checked){
//         console.log("you are paying with a paypal card");
//     }

//     else {
//         console.log("please enter howyo want paying this product");
//     }
// }   

// switch 

// let food= "pizza";
// switch(food){
//     case "A":
//         console.log("you did great");
//         break;
//     case "B":
//         console.log("it's fine");
//         break;
//     default:
//         console.log("auther choice don't in option here");
// }

// let grade = 45;
// switch(true){
//     case grade >= 45:
//         console.log("that it's a big number");
//         break;
//     case grade == 45:
//         console.log("it's right number");
//         break;
//     default:
//         console.log("right condition it's not here");
// }

// do while = do something , then check the condition , repeat if condition is true
// let userN;
// do {
//    userN = window.prompt("enter your user name");
// }while(userN == "")
// console.log("hello",userN);

// for loop = repeat some a certain amount of times

// for(let count = 1;count<=10;count++){
//     console.log("number",count);
// }

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// for(let i =1;i<=20;i++){
//     if(i==10 | i==15 ){
//        continue;
//     }
//     console.log(i);
// }

// nested loop = a loop in another loop
// let symbol = window.prompt("enter a symbole");
// let rows =window.prompt("enter number of rows");
// let column = window.prompt("enter number of column");
// for (let i = 1;i<=rows;i++){
//     for(let j=1;j<=column;j++){
//         document.getElementById("myrectangl").innerHTML+= symbol;
//     }
//     document.getElementById("myrectangl").innerHTML +="<br>";
// }

// function = define code once , and use it many times , to
//            performe some code ,call the function name.

// let user_Name="achraf";
// let age = 24;
// happy_birthday();
// function happy_birthday() {

//        console.log("happy_birthday");
//        console.log("happy_birthday");
//        console.log("happy_birthday",user_Name);
//        console.log("happy_birthday");
//        console.log("you are ",age,"years old!");


// }
// stratprogram();
// function stratprogram(){
//     let user_Name="achraf";
// let age = 24;
// //we define argument when we call function because this variable it's local inside another function we can't know him just define inside function start_program
// happy_birthday(user_Name,age);

// }
// function happy_birthday(user_Name,age) {

//        console.log("happy_birthday");
//        console.log("happy_birthday");
//        console.log("happy_birthday",user_Name);
//        console.log("happy_birthday");
//        console.log("you are ",age,"years old!");


// }

// return = returns a value back to the place
//           where you invoked a function

// let area;
// let width;
// let height;
// width= window.prompt("enter width ");
// height= window.prompt("enter height ");

// area=getArea(width,height);
// console.log("the area is : ",area);
// function getArea(width,height){
//     let result = width*height;
//     return result;
// }

// ternay operator = shortcut for anf if/else statement 
//            take 3 operands

// 1-a condition with ?
// 2-expression if true ?
// 3- expression if false

// condition ? exprifTrue : exprifFlase

// let adult = checkAge(21);
// console.log(adult);

// // function checkAge(age){
// //     if (age >= 18){
// //         return true;
// //     }
// //     else{
// //         return false;
// //     }
// // }
// //this function do same thing
// function checkAge(age) {
//     return age >=18 ? true : false;
// }
// checkWinner(true)
// function checkWinner(win){
//     win ? console.log("you win "): console.log("you lose");

// }

// variable scope = where a variable is accessible
// let : variable are limited to block scope {}
// VAR : VARIABLE are limited to a function (){ }
// global variable : is declared outside of any function
// (if global ,var will change browser's window properties )
// use let keyword not var becuase change property

// for(let i =1;i<=3;i++){
//     console.log(i);
// }

// console.log(i);//can't because let is limited to block scope , we can replace let by var

// for(var i =1;i<=3;i++){
//     // console.log(i);
// }
// console.log(i);

// but var can't access outisde function 

// template literals = delimited with () instead of double or single quotes 
// allows embedded variables and expression 

// let username ="achraf";
// let items =3;
// let total = 34;
// // console.log(`hello ${username}`);
// // console.log(`you items ${items}`);
// // console.log(`total number is : $${total}`);

// // can also use this method in text string 
// text =`hello your name is ${username}<br> and your items is ${items} ,<br>
// and you should paying your total is $${total}<br>`;
// // console.log(text);

// document.getElementById("i1").innerHTML=text;

// tolocalString() = returns string with a language 
// sensitive representation of this number

// number.tolocaleString(locale,{options});
// 'locale' = specify that language (undefined =default set in browser)
// 'options' = object with formating options

// let myNum =100;
// myNum=myNum.toLocaleString("en-US",{style:"currency",currency:"USD"});//US english
// myNum=myNum.toLocaleString("hi-IN"); //hindi
// myNum=myNum.toLocaleString("de-DE",{style:"currency",currency:"EUR"});//German
// myNum=myNum.toLocaleString(undefined,{style:"percent"});
// myNum=myNum.toLocaleString(undefined,{style:"unit",unit:"celsius"});
// console.log(myNum);

// number guessing game
// const answer = Math.floor(Math.random()*10 +1);
// let guesses =0;

// document.getElementById("submit").onclick = function (){
//    let guess = document.getElementById("guess").value;
//    guesses +=1;

//    if(guess == answer){
//     alert(`${answer} it's the # , it's took you ${guesses} guesses`);
//    }
//    else if(guess < answer) {
//          alert("too small");
//    }
//    else{
//     alert("too large !");
//    }
// }
// console.log(answer);

// temperature conversion program 
// let temp =32;
//  temp =toFahreheit(temp);
//  console.log(temp);
// function tocelsius(temp){
//     return (temp-32)*(5/9);


// }

// function toFahreheit(temp){
//     return temp *9/5 + 32;
// }
// document.getElementById("submit").onclick=function(){
//     // cbutton = document.getElementById("cbutton");
//     // fbutton= document.getElementById("fbutton");
//     let temp;
//     if(document.getElementById("cbutton").checked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = tocelsius(temp);
//         document.getElementById("templabel").innerHTML= temp + " C";

//     }

//     else if(document.getElementById("fbutton").checked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = toFahreheit(temp);
//         document.getElementById("templabel").innerHTML= temp + " F";

//     }

//     else{
//         document.getElementById("templabel").innerHTML= "select a unit";
//     }

// }


// array = it's a variable can be store multiple variable of same type
let fruit = ["apple", "orange", "mongo", "banana"];
// fruit[2]="coconut";//just replace value of index 2 by coconut
// fruit.push("lemon");//insert on the end new value 
// fruit.pop();//remove last element 
// fruit.unshift("lemon");// add element on the beginning
// fruit.shift();// remove first element 
// console.log(fruit)
// let length = fruit.length;
// let index = fruit.indexOf("apple");
// console.log(`index of apple is : ${index}`);
// console.log(`length of this array is : ${length}`);

// loop of array

let price = [5, 10, 15, 20];
for (let i = price.length - 1; i >= 0; i -= 1) {
    // console.log(price[i]);
}
// or we can use another choice 
for (let i of price) {
    // console.log(i);
}

// sort an array of strings
fruit1 = fruit.sort().reverse();
for (let i of fruit1) {
    //     console.log(i);
}

//  2D array = An array of arrays

// let fruits=["apple","oranges","bananas"];
// let vegetables = ["carrots","onions","potatoes"];
// let meats = ["eggs","chicken","fish"];

// let grocerylist = [fruits,vegetables,meats];
// // nested loops
// for (list of grocerylist){
//     for (let food of list ){
//         console.log(food);
//     }
// }

// spread operator = allows an iterable such as an  
//   ...            array or string to be expanded in place
//                  where zero or more arguments are expected 
//                     (unpacks the elements)
//  let user_name ="achraf ";
//  console.log(...user_name);// output is : a c h r a f

//  let numbers =[20,5,3,4,8,9,19,2,1];
//  console.log(...numbers);// separator element of array
// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["achraf","hamza","moncef"];
// let class2 =["hajar","nour","doha"];
// class1.push(... class2);
// console.log(class1);
// console.log(... class1);

// rest parameters = represents an idenfinite number 
//  ...         of parameters 
//              (packs arguments into an array)

/*let a=1;
let b = 2;
let c =3;
let d =4;
let e =5;

console.log("sum the two number or more is : ",sum(a,b,c));
// take numbers of argument we want use this methode
function sum(... numbers){
    let total =0;
    for(let number of numbers){
        total +=number;
    }
    return total;
}*/

// callkback = a function passed as ana argument to another
//                    function
// let total =sum(2,3);
// let output = deisplayconsole(total);
// console.log(displaydom(total));

// function sum(x,y){
//     let result = x + y;
//     return result;
// }

// function deisplayconsole(outpot){
//     console.log(outpot);
// }

// function displaydom(outpot){
//     document.getElementById("label").innerHTML = outpot;
// }

// use callback
// sum(2,3,displaydom);

// function sum(x,y,callback){
//    let result = x +y;
//    callback(result);

// }

// function displaydom(outpot){
//     document.getElementById("label").innerHTML = outpot;
// }

// array.forEach() = axecutes a provided callback function 
//    once for each array element

// let students = ["achraf","hamza","yassine"];
// students.forEach(capitalize);
// students.forEach(print);


// //element , index , array : parametr the function forEach()
// function capitalize(element , index, array){
//     array[index]= element[0].toUpperCase() + element.substring(1);
// }


// function print(element){
//     console.log(element)
// }

// array.map() = executes a provided callback function 
//                  once for each array element AND 
//                  creates a new array

// let numbers = [1,2,3,4,5,6];
// let squares = numbers.map(square);
// let Cube = numbers.map(cube);

// squares.forEach(print);
// console.log("-----------------------------");
// Cube.forEach(print1);
// function square(element){
//     return Math.pow(element,2);
// }
// function cube(element){
//     return Math.pow(element,3);
// }

//  function print(element){
//     console.log(element);
//  }


//  function print1(element){
//     console.log(element);
//  }

// array.filter() = creates a new array with all elements that 
//           pass the test provided by a function

// let age = [19,16,21,19,45];
// let aduls = age.filter(checkAge);

// aduls.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }

// array.reduce() = reduce array to a single value

// let prices =[5,12,13,10,8,4];
// let total = prices.reduce(checkOut);
// console.log(`the total is : ${total}`);

// function checkOut(total , element){
//     return total + element;
// }


//  sort an array of numbers
// grade.sort
// let grade =[100,50,90,60,80,70];
// let descending = grade.sort(descendingNumber);
// let ascending = grade.sort(AscendingNumber);
// console.log(grade);
// console.log("this is a descending order");
// descending.forEach(print1);
// console.log("this is an ascending order");
// ascending.forEach(print2);
// function descendingNumber(x,y){
//    return y-x;
// }

// function AscendingNumber(x,y){
//  return x-y;
// }
// function print1(element){
//     console.log(element);
// }
// function print2(element){
//     console.log(element);
// }


// functio expression = function without a name (anonymous function)
//          avoid polluting the global scope with names
//        write it , then forget about it

// sayHello();
// function sayHello(){
//     console.log("hello !");
// }

// const geeting= function(){
//     // a void function without name
//     console.log("void function");
// }

// first method to use 
// geeting();
// let count =0;
// document.getElementById("incress").onclick = function(){
//      count +=1;
//      document.getElementById("label").innerHTML = count;

// }

// document.getElementById("decrees").onclick = function(){
//     count -=1;
//     document.getElementById("label").innerHTML = count;

// }

// second methode use
/*
let count =0;
function incressbutton(){
    count += 1;
    document.getElementById("label").innerHTML = count;
    
}

function decreesbutton(){
    count -= 1;
    document.getElementById("label").innerHTML = count;
}*/

// arrow function =compact alternative to traditional a function =>
/*
const getting = function (username){
     console.log(`hello ${username}`);
}
getting('achraf');

// now we can use replace this function by arrow function use
//  symbole => and we don't  need return statement


const setters=(username) =>console.log(`hii ${username} arrow function` );
setters("bogryn");

let Number = (x,y) => {return x + y;}
console.log(Number(6,6));
*/

// let array =[100,50 ,90, 60 ,80,70];
// array.sort((x,y)=>{x-y});
// array.forEach((element) => console.log(element));
// let descending =(x,y)=>{
// y-x;
// }

// let print = (element) => console.log(element);

// nested function = function inside another function
//  and we use nested function for securise access diffuult
//  after login


//Map = object that holds key-value pairs of any data type
//  that all function exixte in map object
// Map.prototype.set(key, value): Sets the value for a given key.

// Map.prototype.get(key): Gets the value associated with a given key.

// Map.prototype.has(key): Checks if a key exists in the Map.

// Map.prototype.delete(key): Removes a key-value pair from the Map.

// Map.prototype.clear(): Removes all key-value pairs from the Map.

// Map.prototype.size: Returns the number of key-value pairs in the Map.

// Map.prototype.keys(): Returns an iterable of keys.

// Map.prototype.values(): Returns an iterable of values.

// Map.prototype.entries(): Returns an iterable of key-value pairs.

// Map.prototype.forEach(callbackFn): Executes a provided function once for each key-value pair in the Map.

// Map.prototype[Symbol.iterator]: Allows you to iterate through the Map using a for...of loop.


// Map.prototype[Symbol.toStringTag]: A property that indicates the default string description of an object.
//   const store = new Map([
//     ["t-shirt" , 20],
//     ["jeans" , 23],
//     ["socks" , 10]
//   ])
//   storeshoppincart = 0;
//   storeshoppincart += store.get("t-shirt");
//   console.log("total is :",storeshoppincart);
//   console.log(store.has("jeans"));


//   store.forEach((value , key)=> console.log(`${key} $${value}`));

// object = A group of properties and methods properties 
// what an object has methods = what an object can do use.
// to access properties / methods

// how creat the object
// const car = {
//     // properties
//     model : "Mustange",
//     color : "red",
//     year : 2023,

//     // methods
//     drive : function(){
//         console.log("you drive that car");

//     },

//     brake : function (){
//         console.log("You step on breakes ")
//     }
// }
// console.log(car.model);
// console.log(car.color);
// call function 
// car.drive();
// car.brake();

// this = reference to a particular object the object depends 
//    on the immediate contex 

// const car = {
//     // properties
//     model : "Mustange",
//     color : "red",
//     year : 2023,

//     // methods
//     // we should use this methods for defined attribute inside methods

//     drive : function(){
//         console.log(`you drive that car ${this.model}`);

//     }


// }
// car.drive();

// class = a blueprint for creating objects define what 
//  properties and methods they have use a constructor for unique
// properties

// class Player {
//       score = 0;

//     //   inside class when we want define a function 
//     // not necessory need  function keyword

//     pause(){
//         console.log("you passed the game");

//     }
//     exit(){
//         console.log("you exiyed the game");
//     }

// }

// // create a object from class Player
// const player1 =new Player();
// const player2 =new Player();
// player1.score +=1;
// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player1.exit();

// player2.pause();
// player2.exit();

// constructor = A special method of a class , accepts arguments
//            and asssignes properties

// class students{

//     constructor(name , age ,gpa){
//         this.name =name;
//         this.age =age;
//         this.gpa =gpa;
//     }

//     study (){
//         console.log(`${this.name} is studying`);

//     }
// }

// const student1 = new students("achraf",24,3.2);
// student1.study();

// static keyword = belongs to the class , not the objects
//    properties : useful for caches , fixed -configuration
// static methods = useful for utility functions

// class car {

//     static numberofcars=0;
//     constructor (model){
//         this.model =model;
//         car.numberofcars +=1
//     }
// }

// const car1 =new car("mustang");
// const car2 = new car("corvette");
// const car3 = new car ("toyota");

// console.log(car.numberofcars);

// inheritance  = a child class can inherit all the 
//               methods and properties from another class


// create A super Class

// class Animal {

//     alive = true;

//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }

// // child class
// class Rabbit extends Animal{

//     name = "rabbit";

//     run(){
//         console.log(`this ${this.name} is running`);
//     }
// }
// // child class
// class Fish extends Animal{

//     name = "Fish";

//     swim(){
//         console.log(`this ${this.name} is swiming`);
//     }
// }
// // child class
// class Hawck extends Animal{

//     name = "Hawck";

//     fly(){
//         console.log(`this ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawck = new Hawck();

// rabbit.sleep();
// rabbit.sleep();
// rabbit.run();

// fish.sleep();
// fish.sleep();
// fish.swim();

// hawck.sleep();
// hawck.sleep();
// hawck.fly();

//  Super keyword = refers the parent class.
//     commonly used to invoke constructor of a parent class

// // super class
// class Animal {
//     constructor(name , age){
//         this.name=name;
//         this.age =age;
//     }  
// }  

// // child class
// class Rabbit extends Animal{
//      constructor(name , age ,runspeed){
//         super(name,age);
//         this.runspeed=runspeed;
//      } 
// }
// // child class
// class Fish extends Animal{
//    constructor(name, age, swemspeed){
//     super(name,age);
//     this.swemspeed=swemspeed;
//    } 
// }
// // child class
// class Hawk extends Animal{
//     constructor(name,age,flyspeed){
//         super(name,age);
//         this.flyspeed = flyspeed;
//     }  
// }

// const rabbit = new Rabbit("rabbit",1,30);
// const fish = new Fish("fish",0.4,50);
// const hawk = new Hawk("hawk",1,70);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swemspeed);

// console.log(hawk.name)
// console.log(hawk.age);
// console.log(hawk.flyspeed);

// get : bind an object proprty to as function  when 
//  that property os accessed or protected
// set = binds an object property to a function when 
//      that property is assigned a value


// class Car {
//     constructor(power){
//         this ._gas =25;
//         this._power = power;// _power = this is a protected properties


//     }
//     // for access modifier thta why we use methods getters and setters
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L(${this._gas/50 * 100}%)`;
//     }
//     set gas (value){
//         if (value > 50){
//             value = 50;
//         }
//     else{
//         this._gas = value;
//     }

//     }
// } 


// let car =new  Car(500);
// car.gas= 45;
// console.log(car.power);
// console.log(car.gas);

// object a function as argument 
// class Car{

//     constructor (model , year,color){
//         this.model=model;
//         this.year=year;
//         this.color=color;
//     }

//     drive(){
//         console.log(`you are driving ${this.model}`)
//     }
// }


// const car1 = new Car("Mustang" ,2023 ,"red");
// const car2 = new Car("corvette",2024,"blue");
// const car3 = new Car("lambo",2022,"yellow");
// const car4 = new Car("ferrai",2025,"white");
// // color(car1 , "gold");
// // displayInfo(car1);
// // function displayInfo(car){
// //     console.log(car.model);
// //     console.log(car.year);
// //     console.log(car.color);
// // }

// // function color(car ,color){
// //     car.color = color;
// // }

// // create an array as object
// // I have 3 object from class car this object I convert them
// //  as index this array
// let array =[car1 , car2 , car3, car4];
// console.log( array[0]);
// // array[0].drive();
// // array[1].drive();
// // array[2].drive();


// startRace(array);
// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }

// anonymous Object = objects without a name Not directly
//  referenced less syntax . No need for unique names

// class Card{
//     constructor(value , suit){
//         this.value =value;
//         this.suit = suit;
//     }
// }
// // anonymous object withou name like cretae an object but
// //  strat new Calss();

// let cards = [new Card("A","Hearth"),
// new Card("A","Spaders"),
// new Card("A","Diamond")]
// cards.forEach(card => console.log(`value : ${card.value} suit : ${card.suit}}`))

// error : objects a description of something went wrong
// for example : can't open a file lose connection,
// user types incorrect input TypeError.

//   throw : executes a user-defined error

// try {
//     let x = window.prompt("Enter a #");
//     x=Number(x);

//     if(isNaN(x)) throw 'that was not a number';
//     if(x=="") throw 'that was empty '

//     console.log(`${x} is a number`);
// }
// catch (error){
//     console.log(error);
// }
// finally{
//     console.log("this is always execute");
// }

// setTimeout() = invoke a function after a number of
// millisecond function (doesn't pause execution)
// let item ="cryptocurrency";
// let Price= 490;
//  let timer1=setTimeout(firstMessage,3000,item , Price);
//  let timer2=setTimeout(secondMessage,6000);
//  let timer3=setTimeout(thirdMessage,9000);

// function firstMessage(){
//     alert(`Buy this course $${item} for ${Price} `);
// }

// function secondMessage(){
//     alert(`this is not a scam`);
// }
// function thirdMessage(){
//     alert("DO OTT !");
// }

// document.getElementById("mybutton").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert("thank's fo Buying");

// }

// setInterval() = invokes a function repeatedly after a number 
// of ms asynchronous function (doesn't pause execution)

// let count =0 ;
// let max = window.prompt("Count up to what #");
// max =Number(max);

// const mytimer =setInterval(countUp,1000);

// function countUp(){
//     count +=1;
//     console.log(count);
//     if(count>=10){
//         clearInterval(mytimer);
//     }
// }

// The Date object is used to work with dates & times

// let date = new Date(0);1969 date of beginneing
// let date = new Date(2023,0,1,1,1,1,1);// yy-MM(0-11)-DAY-HOUR-MINUT-SECOND-MS
// let date = new Date("january 1,2023 00:00:00");
let date = new Date();

// Get methods the class DATE
/*
let year = date.getFullYear();
let DayOfMonth = date.getDate();
let DayOfWeek = date.getDay();
let month = date.getMonth();
let Hour = date.getHours();
let Minute = date.getMinutes();
let Seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
// Set methods the class DATE
/*
date.setFullYear(2099);
date.setMonth(11);
date.setDate(31);
date.setHours(12);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

// date.toLocaleString();
// document.getElementById("mylabel").innerHTML = formatTime(date);


// function formatDate(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let DayOfMonth = date.getDate();

//     return `${year}/${month}/${DayOfMonth}`
// }

// function formatTime(date) {
//     let Hour = date.getHours();
//     let Minute = date.getMinutes();
//     let Seconds = date.getSeconds();
//     let amorpm = Hour >= 12 ? "pm" : "am";

//     Hour = (Hour % 12) || 12;

//     return `${Hour}:${Minute}:${Seconds} ${amorpm}`
// }


//new ode on js
let x = "55";
// console.log(x, typeof(x))
let y = Number(x);
// let a = "6";
// let b = Number(a);
// console.log(y, typeof(y));
// let radius = 5;
// const PI = 3.14;
// radius = Number(radius);
// let circleference = PI * radius * radius;
// // console.log(circleference);

// use Math function
// max, min , flor , ceil, round 
// let c = 1.20;
// let d = Math.ceil(c);
// console.log(d);

// program using html and DOM code
// let count = 0;
// document.getElementById("decrease").onclick = function() {
// count -= 1;
// document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("reset").onclick = function() {
// count = 0;
// document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("increase").onclick = function() {
// count += 1;
// document.getElementById("countlabel").innerHTML = count;
// }

// random value
// value between 0 and 1
let value = Math.random();
// console.log(value);
// value between 0 and n
let z = Math.random() * 6;
// console.log(z);
// value between 0 and 6 but not vergule
let f = Math.floor(Math.random() * 6);
// console.log(f);

// now trying practice this methode by usinf DOM
// let number1;
// let number2;
// let number3;
// document.getElementById("mybutton").onclick = function() {
//     number1 = Math.floor(Math.random() * 6);
//     number2 = Math.floor(Math.random() * 6);
//     number3 = Math.floor(Math.random() * 6);

//     document.getElementById("alabel").innerHTML = number1;
//     document.getElementById("blabel").innerHTML = number2;
//     document.getElementById("clabel").innerHTML = number3;
// }

// String Methods
// slice methods
let full_name = "achraf-bogryn";
let firstname = full_name.slice(7);
// console.log("this is full name", full_name);
// console.log("this is last name ", firstname);

// Number Guessing GAME
const min = 1;
const max = 100;
// const answer = Math.floor(Math.random() * (max - min + 1) + min)
// console.log(answer)
let tmp = 0;
let guess;
let running = true;
// while (running) {
//     guess = window.prompt(`Guess a number between ${max}-${min}`);
//     guess = Number(guess);
//     if (isNaN(guess)) {
//         window.alert("please enter a valid number");
//     } else if (guess > max || guess < min) {
//         window.alert("your guess must be between 1 and 100");
//     } else {
//         tmp++;
//         if (guess < answer) {
//             window.alert("To low try again");
//         } else if (guess > answer) {
//             window.alert("  To High Try again")
//         } else {
//             window.alert(`congralution , the answer was ${guess}. it's took you ${tmp}`);
//             running = false;
//         }
//     }
// }


// Dice Roller Program

// function rollDice() {
//     const numOfDice = document.getElementById('numOfDice').value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages")
//     const values = [];
//     const images = [];

//     for (let i = 0; i < numOfDice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         // console.log(value);
//         values.push(value);
//         images.push(`<img src="img/${value}.png" alt='Dice ${value}'>`);
//     }
//     // console.log(values);
//     diceResult.textContent = `dice: ${value.join(', ')}`;
//     diceImages.innerHTML = images.join('');
// }

// Rnadom PASSWORD GENERATOR

function generatePassword(length, includeToLowerCase, includeToUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopkrstuvwz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPKRSTUVWZ";
    const numberChars = "0123456789";
    const symbleChars = "!@#$^&*()_-+=";

    let allowdChars = "";
    let password = "";
    allowdChars += includeToLowerCase ? lowerCaseChars : "";
    allowdChars += includeToUpperCase ? uppercaseChars : "";
    allowdChars += includeNumbers ? numberChars : "";
    allowdChars += includeSymbols ? symbleChars : "";

    if (length <= 0) {
        return `(password must be at least 1)`;
    }

    if (allowdChars.length === 0) {
        return `(at least 1 set of character needs to be select )`;
    }

    for (let i; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowdChars.length);
        password += allowdChars[randomIndex];
    }



    // console.log(allowdChars);
    // console.log(password);



    return password;
}

const passwordLength = 12;
const includeToLowerCase = true;
const includeToUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeToLowerCase,
    includeToUpperCase,
    includeNumbers,
    includeSymbols);
// console.log(`Generated password : ${password}`);

// Callback

function sum(a, b, fun) {
    let result = a + b;
    fun(result);
}

function displayResult(a) {
    console.log(a);
}

function displaycontent(a) {
    document.getElementById("myh2").textContent = a;
}

// sum(6, 6, displaycontent);

// FoEach methode
// array.forEach() = axecutes a provided callback function 
//    once for each array element
// element index , array are provided

let numbers = [1, 2, 3, 4, 5];
let arrayDouble = [];


// numbers.forEach(display);
// console.log("double");
numbers.forEach(double);
// console.log(arrayDouble)

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    arrayDouble[index] = element * 2;
    // console.log(element);
}

// map() : accept a callback abd applies function
// to each element and return a new array 
const student = ['achraf', 'hafsa', 'ayoub'];
const newArray = student.map(upperCase);
// console.log(newArray);
const Dates = ['2022-11-09', '2023-10-04', '2023-09-28'];
const newFormat = Dates.map(dateFormat);
// console.log(newFormat);

function dateFormat(element) {
    const part = element.split("-");
    return `${part[1]}/${part[2]}/${part[0]}`
}

// filter() : creates a new array by filtering out element 

let digits = [1, 2, 3, 4, 5, 6, 7, 8];
let eventNumb = digits.filter(isEvenet)
let isOddNumbber = digits.filter(isODD);
// console.log(eventNumb);
// console.log(isOddNumbber);

function isEvenet(element) {
    return element % 2 === 0;
}

function isODD(element) {
    return element % 2 !== 0;
}



function upperCase(element) {
    return element.toUpperCase();
}




const number = [1, 2, 3, 4, 5];


function square(element) {
    return Math.pow(element, 2)
}

const suareNumber = number.map(square);


// reduce() : reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15];
const total = price.reduce(sum);
// console.log(`total is $${total}`);
// I want two number after vergule
// console.log(`total is $${total.toFixed(2)}`);

function sum(previus, next) {
    return previus + next;
}

const grades = [15, 25, 10, 65, 60, 78, 25];
const maxNumber = grades.reduce(getMax);
const minNumber = grades.reduce(getMin);

// console.log(`max in the table grades is ${maxNumber}`);
// console.log(`min in the table grades is ${minNumber}`);

function getMax(accumlator, element) {
    return Math.max(accumlator, element);
}

function getMin(accumlator, element) {
    return Math.min(accumlator, element);
}

// Arrow function : a concicse way to write function expressions
//  good for simple functions that you use only once (parameters)
//  => some code

// function hello(){
// console.log("hello")
// }

const Hello = (name) => console.log(`hello ${name}`);
// Hello('achraf');

// ES6 Module : An external file that contains code 
// that can be imported into other javascript file.
// write reusable code for many different apps


// import { PI, getCircumReference, getArea, getVolume } from './mathUtil.js';
// console.log(PI);
// const circumference = getCircumReference(10);
// console.log(`reference ${circumference.toFixed(2)}cm `);

// Error : An object is created to represent a probelm that occurs
//  Occur afterm with user input

// try {}: enclose code that might potentially cause an error
// catch {} : Catch amd handle any throw Errors from try {}
// finally {} : (optional) always executes .use mostly for clean up
// ex : close filter , close connection , realease ressources

// try {
//     console.log(a);
//     // Network errors
//     // PROMISE Rejection
//     // SECURITY ERRORS
// } catch (error) {
//     console.error(error)
// } finally {
//     console.log("this always executed");
//     // Close files
//     // close onnection
//     // RElease ressources
// }

// try {
//     let divided = window.prompt("enter a number");
//     divided = Number(divided);
//     let divisor = window.prompt("enter a value ");
//     divisor = Number(divisor);
//     if (divisor == 0) {
//         throw new Error(`you can't divide by zero!`);
//     }
//     if (isNaN(divided) || isNaN(divisor)) {
//         throw new Error(`value must be a number`);
//     }

//     let result = divided / divisor;
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }
// console.log("you have raeched the end !");

// Document object Module
// document.title = "my web page";
// const userName = " my name";
// const pageContent = document.getElementById("p");
// pageContent.textContent += userName;
// document.body.style.backgroundColor = "hsl(0,0%,15%)";

// element selector : methode used to target and manipulation
// HTML element they allow you to select one or multiple 
// element from the DOM

// document.getElementById() : IF ID not existe retur NULL
// document.getElementsByClassName(): HTML collections\
// document.getElementsByTagName(): HTML collection
// document.querySelector() :First element  OR NULL
// document.querySelectorAll : MODELIST

// const heading = document.getElementById("my-heading");
// heading.style.backgroundColor = "red";
// heading.style.textAlign = "center";
// console.log(heading);

// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);
// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "green";
// fruits[2].style.backgroundColor = "red";

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow"
// });

// const h4Element = document.getElementsByTagName("h4");
// const liElement = document.getElementsByTagName("li");
// console.log(h4Element);
// h4Element[0].style.backgroundColor = "green";
// Array.from(h4Element).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElement).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// })

// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "red";

// const elemnetLI = document.querySelector("li");
// elemnetLI.style.backgroundColor = "red";

// const elementAll = document.querySelectorAll("li");
// elementAll[2].style.backgroundColor = "red";
// elementAll.forEach(items => {
//     items.style.backgroundColor = "red";
// });

// DOM navigation : the process of navigation throuph the structure 
// of an html document using javaScript

// .firstElementChild
// .lastElementChild
// .nextElemetSibling
// .previousElementSibling
// .parentElement
// .children

// ____________________________.firstElementChild______________________

// const element = document.getElementById("vegetab");
// const firstChild = element.firstElementChild.style.backgroundColor = "red";
// const vegetElement = document.getElementById("vegetab");
// const vegetFirst = vegetElement.firstElementChild.style.backgroundColor = "red";

const fElement = document.querySelectorAll("ul");
fElement.forEach(i => {
    const firstChild = i.firstElementChild;
    // firstChild.style.backgroundColor = 'yellow';
})


// ___________________________.lastElementChild________________________
const lElement = document.querySelectorAll("ul");
lElement.forEach(i => {
    const lastChild = i.lastElementChild;
    // lastChild.style.backgroundColor = 'red';
})

// _____________________.nextElemetSibling__________________
const element1 = document.getElementById("vegetab");
// const nextSibing = element1.nextElementSibling;
// nextSibing.style.backgroundColor = "green";

// _________________.previousElementSibling_______________
const previous = document.getElementById("vegetab");
// const previousElement = previous.previousElementSibling;
// previousElement.style.backgroundColor = "yellow";

const previousn = document.getElementById("desserts");
// const desserts = previousn.previousElementSibling;
// desserts.style.backgroundColor = "red";

// ____________________.parentElement______________________
const parentElement = document.getElementById("cake");
// const parent = parentElement.parentElement;
// parent.style.backgroundColor = "yellow";
// _________________________.children_____________________
const Celement = document.getElementById("fruits");
// const children = Celement.children;
// console.log(children);

// Array.from(children).forEach(child => {
//         child.style.backgroundColor = "red";
//     })
// ____________________________________________________

// Add & change HTML Element : 
// STEP 1 : CREATE ELEMENT 
// __________________________________________________________
// const H1 = document.createElement("h1");
// add js code on ordered list 
// const newListItem = document.createElement("li");

// STEP 2 : ADD ATTRIBUTES/PROPERTIES
// ____________________________________________________
// H1.textContent = "I like pizza";
// H1.id = "myH1";
// H1.style.backgroundColor = "red";
// H1.style.textAlign = "center";
// // applied on list 
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";



// STEP 3 : APPEND ELEMENT TO DOM
// _____________________________________________________________________
// document.body.append(H1);
// document.body.prepend(H1);
// document.getElementById("box1").append(H1);
// document.getElementById("box1").prepend(H1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(H1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(H1, boxes[1]);

// REMOVE HTML ELEMENT
// _____________________________________________________________
// document.getElementById("box1").removeChild(H1);



// Mouse Events 
// EventListener : listen for specific events to create interactive 
// web pages events: click , mouseover , mouseout , 
// addEventlistener(event , callback);

// const mybox = document.getElementById("mybox");
// const mybutton = document.getElementById("mybutton");

// function changelCoor(event) {
//     event.target.style.backgroundColor = "red";
//     event.target.style.textContent = "OUCH";
// }
// mybox.addEventListener("click", function(event) {
//     event.target.style.backgroundColor = "red";
//     // event.target.style.textContent = "Don't Do it";
//     event.target.style.color = "green";

// });

// mybutton.addEventListener("click", function(event) {
//     // event.target.style.backgroundColor = "blue";
//     mybox.style.backgroundColor = "red";
//     mybox.style.color = "blue";
//     // event.target.style.textContent = "Don't Do it";
//     // event.target.style.color = "green";

// });

// mybox.addEventListener("mouseover", function(event) {
//     event.target.style.backgroundColor = "yellow";
//     // event.target.style.textContent = "Don't Do it";
//     event.target.style.color = "blue";

// });


// mybutton.addEventListener("mouseover", function(event) {
//     // event.target.style.backgroundColor = "red";
//     // event.target.style.textContent = "Don't Do it";
//     // event.target.style.color = "blue";
//     mybox.style.backgroundColor = "green";
//     mybox.color.color = "dark";


// });

// mybox.addEventListener("mouseout", function(event) {
//     event.target.style.backgroundColor = "lightgreen";
//     // event.target.style.textContent = "Don't Do it";
//     // event.target.style.color = "green";

// })

// mybutton.addEventListener("mouseout", function(event) {
//     // event.target.style.backgroundColor = "orange";
//     // event.target.style.textContent = "Don't Do it";
//     // event.target.style.color = "green";
//     mybox.style.backgroundColor = "orange";
//     mybox.style.color = "lightgreen";

// })

// Key events
// eventsListener = listen for specific events to create interactive
// web pages events : keydown , keyup,,document.addEventListener(event,callback)
// __________________________________________________________
// 
// 
// document.addEventListener("keydown", (event) => {
//     console.log(`key Down = ${event.key}`);
// });

// document.addEventListener("keyup", (event) => {
//     console.log(`key Up = ${event.key}`);
// });

// const mybox = document.getElementById("events");
// const moyeAmount = 10;
// let x1 = 0;
// let y2 = 0;

// document.addEventListener("keydown", evenet => {
//     mybox.textContent = "H";
//     mybox.style.backgroundColor = "red";
// });

// document.addEventListener("keyup", evenet => {
//     mybox.textContent = "Mybox";
//     mybox.style.backgroundColor = "lightblue";
// });

// document.addEventListener("keydown", event => {
//     // console.log(event.key);
//     if (event.key.startsWith("Arrow")) {

//         event.preventDefault();

//         switch (event.key) {
//             case "ArrowUp":
//                 y2 -= moyeAmount;
//                 break;
//             case "ArrowDown":
//                 y2 += moyeAmount;
//                 break;
//             case "ArrowLeft":
//                 x1 -= moyeAmount;
//                 break;
//             case "ArrowRight":
//                 x1 += moyeAmount;
//                 break;
//         }

//         mybox.style.top = `${y2}px`;
//         // mybox.style.bottom = `${y2}px`;
//         mybox.style.left = `${x1}px`;
//         // mybox.style.right = `${x1}px`;

//     }


// });

// Hide/show HTML
// const myButton = document.getElementById("button");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
//     // if (myImg.style.display === "none") {
//     //     myImg.style.display = "block";
//     //     myButton.textContent = "Hide";
//     // } else {
//     //     myImg.style.display = "none";
//     //     myButton.textContent = "Show"
//     // }

//     if (myImg.style.visibility === "hidden") {
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide";
//     } else {
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "Show"
//     }

// });

// _____________________________________________________________

// nodeList = static collection of HTML element by
//  (id,class,element)
// can be created by using querySelectorAll() 
// similiar to an array , but no (map,filter,reduce)
// Nodelist won't update to automatcally reflect changes

// let buttonsN = document.querySelectorAll(".myButtons");

// console.log(buttonsN);
// buttonsN.forEach(button => {
//     button.style.backgroundColor = " green ";
//     button.textContent = "search";
// });

// click event listener 

// buttonsN.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "red";
//     });
// });

// MOUSEOVER ,MOUSEOUT event listener

// buttonsN.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "yellow";
//     });
// });

// buttonsN.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = " hsl(205, 100%, 60%)";
//     });
// });

// ADD AN ELEMENT 
// step 1
// const newButton = document.createElement("button");
// step 2
// newButton.textContent = "button5";
// newButton.classList = "myButtons";
// step 3
// document.body.appendChild(newButton);
// console.log(buttonsN);
// n console show us 4 in nodelist not add automatically new button
// that why we need to do this line of command
// buttonsN = document.querySelectorAll(".myButtons");
// console.log(buttonsN);

// Remove an element 
// buttonsN.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         // now we renove elment but number the element 
//         // inside nodelist not change , that why we neeed 
//         // to do that manuelly
//         buttonsN = document.querySelectorAll(".myButtons");
//         console.log(buttonsN)
//     });
// })

// _________________________________________________________
// ClassList : elemnt property in JavaScript used to iteract 
// with an element's list of classes (CSS element ) 
// allows you to make reusable classes for many elements
// across your webpage

//   add() 
//   remove()
//   toggle(remove if present , add if not)
//   replace(oldClass , newClass )
//   contains()

// const myButton = document.getElementById("mybutton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled")
// myButton.addEventListener("mouseover", event => {
//     // replace add and remove by toggle
//     // event.target.classList.add("hover");
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     // replace add and remove by toggle
//     // event.target.classList.remove("hover");
//     event.target.classList.toggle("hover");
// });

// myButton.classList.add("enabled");
// myButton.addEventListener("click", event => {
//     if (event.target.classList.contains("disabled")) {
//         // event.target.textContent += "1";
//         event.target.classList.replace("disabled", "enabled");

//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });
// const H = document.getElementById("myH1");
// H.classList.add("enabled");

// H.addEventListener("click", event => {
//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += 1;


//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// let BUTT = document.querySelectorAll(".BUTTONS");
// BUTT.forEach(button => {
//     button.classList.add("enabled");
// });

// BUTT.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// BUTT.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// BUTT.forEach(button => {
//     button.addEventListener("click", event => {
//         if (event.target.classList.contains("disabled")) {
//             event.target.classList.replace("disabled", "enabled");
//         } else {
//             event.target.classList.replace("enabled", "disabled");
//         }

//     });
// });

// ____________________________________________________________
// callback Hell : Situation in JavaScript where callbacks are
// nested within other callbacks to the degree where the code 
// is difficult to read .
// Old pattern to handle asynchronous functions .
// use Promises = async/await to avoid callback Hell

function task1(callback) {
    //  we transform this functions asynchrouns we add 
    // setTimeout() function 
    setTimeout(() => {
        console.log("task 1 it's complet");
        callback();
    }, 4000);

}

function task2(callback) {
    setTimeout(() => {
        console.log("task 2 it's complet");
        callback();
    }, 3000);

}

function task3(callback) {
    setTimeout(() => {
        console.log("task 3 it's complet");
        callback();
    }, 2000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("task 4 it's complet");
        callback();
    }, 1000);

}


// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => { console.log("all tasks complet") });
//         })
//     });
// });

// console.log("all tasks complet");

// ___________________________________________________________
// Promise : An object that manages asynchrounous operations .
// wrap a promise object arround {asynchrounous code}
// "I promise to return a value "
// PENDING --> RESOLVED or REJECTED 
// new Promise(resolve , reject )=> {asynchrounous code}

// By using a promis we don't need callback

// DO this CHORSE IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("you walk the dog");
//         callback();
//     }, 1500);

// }

// here I will use Promis

function walkDog() {
    return new Promise((resolve, reject) => {
        // Now if we want add reject if task it's dailed 
        // then we use reject with a message
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("you walk the dog");
            } else {
                reject("you did not walk the dog");
            }

        }, 1500);
    })
}

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("you clean the kitchen");
//         callback();
//     }, 2500);

// }

// here I will use Promis

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenIsClean = false;
            if (kitchenIsClean) {
                resolve("you clean the kitchen");
            } else {

                reject("you did not clean the kitchen")
            }

        }, 2500);
    });
}


// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("you take out the trash");
//         callback();
//     }, 500);

// }

// here I will use Promis

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const TrashIsTakeOut = true;
            if (TrashIsTakeOut) {
                resolve("you take out the trash");
            } else {
                reject("you did not take out the trash");
            }


        }, 500);
    })
}

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("you fnish all the chores");
//         });
//     });
// });

//  here call function with promise 

walkDog().then(value => {
    console.log(value);
    return cleanKitchen()
}).then(value => {
    console.log(value);
    return takeOutTrash()
}).then(value => {
    console.log(value);
    console.log("you finish all chores ")
}).catch(error => console.error(error));













// console.log(`square numbers the array number is  ${suareNumber}`)