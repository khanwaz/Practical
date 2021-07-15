// This is my first js script
 console.log('Hello World');


 let nameR = "akram";
 let lastName ="khan";
 console.log(nameR);
 console.log(lastName);


 const intrestRate = 0.3;
 console.log(intrestRate);


 let nameU = "mo";// string
 let age = 30;// number
 let isApp = false;// boolean
 let firstName = "vo";
 let selectCol ="null";
 console.log(nameU);
 console.log(age);
 console.log(isApp);
 console.log(firstName);
 console.log(selectCol);

//objects
 let person = {
    nameUR : "mo",// string
    hisAge : 30,// number
    isAppatite : false//
 };
 //dot notation
 person.hisAge = 56;
 //bracket notation
 person['nameUR'] = 'moh';
 console.log(person.hisAge);
 console.log(person);

 //Arrays
 let selectColor = ["red","blue"];
 selectColor [2] ='null';
 console.log(selectColor);
 console.log(selectColor[2]);
 console.log(selectColor.length);

 //functions
 function greet()
 {
     console.log("hello world");
 }

 greet();

 function greetOne(nameUR,firstName)
 {
     console.log("hello " +  nameUR +" "+  firstName);
 }

 greetOne("jo","mo");

 function calcul(numberDigi)
 {
     return numberDigi * numberDigi;
     
 }
 let numberDigi = calcul(2);
 console.log((numberDigi));

//Operators
function operatorsAir1(firstNumber,secondNumber){
    return firstNumber + secondNumber;    
};//additon

function operatorsAir2(firstNumber,secondNumber){
    return firstNumber - secondNumber;
};//subtration

function operatorsAir3(firstNumber,secondNumber){
    return firstNumber * secondNumber;
};//multiplycation

function operatorsAir4(firstNumber,secondNumber){
    return firstNumber / secondNumber;
};//division

function operatorsAir5(firstNumber,secondNumber){
    return firstNumber % secondNumber;
};//mod

function operatorsAir6(firstNumber,secondNumber){
    return firstNumber ** secondNumber;
};//exponential

function operatorsAir7(firstNumber,secondNumber){
    return firstNumber ++ ;
};//incremental

function operatorsAir8(firstNumber,secondNumber){
    return --firstNumber ;
};//decremental

console.log(operatorsAir1(4,2));

console.log(operatorsAir1(4,2));

console.log(operatorsAir2(4,2));

console.log(operatorsAir3(4,2));

console.log(operatorsAir4(4,2));

console.log(operatorsAir5(4,2));

console.log(operatorsAir6(4,2));

console.log(operatorsAir7(4,2));

console.log(operatorsAir8(4,2));

function operatorsAir01(firstNumber){
    return firstNumber +=5 ;
};//additon assignment

function operatorsAir02(firstNumber){
    return firstNumber -= 5 ;
};//subtration assignment

function operatorsAir03(firstNumber){
    return firstNumber  *= 5;
};//multiplycation assignment

function operatorsAir04(firstNumber){
    return firstNumber /=5 ;
};//division assignment

function operatorsAir05(firstNumber){
    return firstNumber %= 5 ;
};//mod assignment

function operatorsAir06(firstNumber){
    return firstNumber **= 5 ;
};//exponential assignment

console.log(operatorsAir01(10));

console.log(operatorsAir02(10));

console.log(operatorsAir03(10));

console.log(operatorsAir04(10));

console.log(operatorsAir05(10));

console.log(operatorsAir06(10));

function operatorsAir001(firstNumber){
    return firstNumber > 1 ;
};//greater than 

function operatorsAir002(firstNumber){
    return firstNumber >=1 ;
};//greater than or equals to 

function operatorsAir003(firstNumber){
    return firstNumber < 1 ;
};//less than 

function operatorsAir004(firstNumber){
    return firstNumber <= 1 ;
};//less than or equals to

function operatorsAir005(firstNumber){
    return firstNumber === 1 ;
};//equals to 

function operatorsAir006(firstNumber){
    return firstNumber !== 1 ;
};//not equals to 

console.log(operatorsAir001(10));

console.log(operatorsAir002(10));

console.log(operatorsAir003(10));

console.log(operatorsAir004(10));

console.log(operatorsAir005(10));

console.log(operatorsAir006(10));

//Equality operator
console.log('1'==1);

console.log('1'===1);

//Tenary Operator

let points = 110;
let type = points> 100 ? 'gold' : 'silver';

console.log (type);

let pointsNew = 90;
let typeNew = pointsNew > 100 ? 'gold' : 'silver';

console.log (typeNew);

//Logical Operator

//Logical AND
let highIncome = true ;
let goodCreditScore = true ;
let elgibleForLoanAnd = highIncome && goodCreditScore ;

//Logical NOT
let applicationRefusedAnd = !elgibleForLoanAnd;

console.log('Eligible : ',elgibleForLoanAnd);
console.log('Application Refused : ',applicationRefusedAnd);

//Logical OR
let highIncomeNew = false ;
let goodCreditScoreNew = false ;
let elgibleForLoanOr = highIncomeNew || goodCreditScoreNew ;

//Logical NOT
let applicationRefusedOr = !elgibleForLoanOr;

console.log('Eligible : ',elgibleForLoanOr);
console.log('Application Refused : ',applicationRefusedOr);


//Logical Operator with non Booleans

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

let userColorNew = undefined;
let defaultColorNew = 'blue';
let currentColorNew = userColorNew || defaultColorNew;

console.log(currentColorNew);


//condition Statement

let hour = 30;

if (hour >= 6 && hour < 12){
    console.log('Good Morning');
}

else if (hour >= 12 && hour <18){
    console.log('Good AfterNoon');
}

else console.log('Good Evening');

//Switch Case

let role;

role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
} 

//For Loops

for (let i=0; i < 5; i++)
{
    console.log('Hello World',i);

}
 
for (let j = 1 ; j < 10 ; j++)
{
   if (j%2 !==0) console.log(j);

}

for (let k = 10 ; k >= 1 ; k--)
{
    // for (let l = 1 ; l < 10 ; l++)
    if (k%2 !==0) console.log(k);

}

//While Loops

let l = 0;

while (l < 10) {
    if (l%2 !==1) console.log(l);
    l++;
}

//Do While Loops

let m = 0;

do{
    if (m%2 !==0) console.log(m);
    m++;
}while (m < 10); 

//For-In

const personNew = {
    nameNew : 'Aleena',
    ageNew  : '1'
};

for (let key in personNew)
console.log(key,personNew[key]);

const colors = ['red','green','blue'];
for (let index in colors)
console.log(index,colors[index]);

//For-Of

const colorsr = ['red','green','blue'];
for(let color of colorsr)
console.log(color);
 
//max of two number
let numberMax = max(13,5);
console.log(numberMax);

function max (firstNumberMax,secondNumberMax)
{
    return (firstNumberMax > secondNumberMax) ? firstNumberMax : secondNumberMax;
}

let screen = isLandscape (23,5)
console.log("This is a Landscape : ",screen);

function isLandscape (width,height)
{
    return (width > height);
}

//Fizz Buzz

//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 or 5 => FiZZBuzz
//Not Divisible by 3 or 5 => input
//Not a number => 'not a number'

const output = fiZZBuzz (15);
console.log (output);


function fiZZBuzz(input){
    if (typeof input !== 'number')
        return NaN;
        
    if((input % 3 === 0)&&(input % 5 === 0))
        return  'FizzBuzz';

    if(input % 3 === 0)  
        return 'Fizz';
    
    if(input % 5 === 0)
        return  'Buzz';

    if ((input % 3 !== 0)||(input % 5 !== 0))
        return input;
}


//Check Limit = 70 output:OK
//for every 5 kms -> 1 points
//Math.floor(1.3)
//after the 12 points output : License Suspended

// const outputSpeed = checkSpeed (130);
// console.log (outputSpeed);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     const maxPoints  = 12;
//     let remainingPoints;

//     if (speed < speedLimit + kmPerPoint)
//         return 'OK';

//     else 
//     {
//         const points = Math.floor ((speed - speedLimit)/ kmPerPoint);
//             if (points >= maxPoints)
//                 return 'License Suspended';
//             else 
//                 remainingPoints = maxPoints - points;
//                 return remainingPoints;
//     }
// }

checkSpeed (130)
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints  = 12;
    let remainingPoints;

    if (speed < speedLimit + kmPerPoint)
    {
        console.log('OK');
        return;
    }     
       const points = Math.floor ((speed - speedLimit)/ kmPerPoint);
        
       if (points >= maxPoints)
        {   console.log('License Suspended');
            return;
        }
            remainingPoints = maxPoints - points;
            console.log('remaining points:', remainingPoints);
}

// const oddEvenResult = oddEven(4);
// console.log(oddEvenResult);
oddEven(10)
function oddEven(numberOddEven)
{
    for (let loopy = 0; loopy <= numberOddEven; loopy++  ){
    // if (loopy % 2 === 0)
    // console.log(loopy,'EVEN');
    // else
    // console.log(loopy,'ODD');    
    const message = (loopy % 2 === 0) ? 'EVEN':'ODD';
    console.log (loopy , message);
    }
}    

// Truthy or falsy 

const array =[0,1,4 ,null, NaN,''];
console.log(countTruthy(array));

function countTruthy(array)
{
    let count = 0;
    for (let value of array)
    if (value)
    count++;
    return count;
}

//Show Properties

const movie = {
    title : 'a',
    releaseYear: 2001,
    rating:4.5,
    director:'b'
};

showProperties(movie)

function showProperties(obj)
{
for (let key in obj)
if (typeof obj[key]== "string")
console.log (key,obj[key]);
}


//sum of multiple of 3 and 5 in 10
console.log(sum(100));

function sum(limit)
{
    let sumDivisor = 0;  

    for (let u = 0; u <= limit ;u++)    
        if(u % 3 === 0||u % 5 === 0)
        sumDivisor += u;

    return sumDivisor;
}


//Grades

//Average=70
//1-59:F
//60-69:D
//70-79:C
//80-89:B
//90-100:A



const marks = [90,90,80];
console.log(grades(marks));

function grades(marks)
{
    const average = calculationAverage(marks);

    if (average < 60)   return "F";
    if (average < 70)   return "D";
    if (average < 80)   return "C";
    if (average < 90)   return "B";
    if (average < 100)  return "A";
}

function calculationAverage(array)
{
    let sum = 0;
    for (let mark of array)
      sum += mark;
    return sum / array.length;
}


// Show Stars
showStars(15);

function showStars(limitStar)
{
    for (let p = 1; p <= limitStar ; p++)
    {
        let s = '';
        for (let q = 0; q < p ; q++)
            s += '*' ;
        console.log(s);
       
    }
}

// Prime Number

primeNumber(20);

function primeNumber(limitPrime)
{
    for (let numberPrime = 2;  numberPrime <= limitPrime ; numberPrime++ )
    {//opening of a for loop.it will run till the limitPrime is reached
        let isPrime = true;
        for (let factorPrime = 2; factorPrime < numberPrime ; factorPrime++)
        {
            
            if (numberPrime % factorPrime === 0)
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime)console.log (numberPrime);
    }//closing of a for loop.

}

//oops

const circle  = {
radius: 1,
locationCircle : {
    x: 1,
    y: 1
},
isVisible : true,
//draw : function (){
draw(){    
console.log('Draw');
}
};

circle.draw();

// Factory Functions

function createCircle(radiusCircle)
{//opening of the createCircle function
return {// opening of the object
radiusCircle,
drawCircle (){//opening of the draw function
console.log('draw');
}//closing of the draw function
};//closing of the object
}//closing of the  createCircle function

const circleOne = createCircle(9); // initializing the function to a variable
console.log(circleOne);//displaying the createCircle function

const circleTwo = createCircle(19); // initializing the function to a variable
console.log(circleTwo);//displaying the createCircle function


// Constructor Function

function Circle(radius)
{//opening a constructor function
    this.radius = radius;
    this.draw =  function()
    {//opening draw function
        let a;//initializing varible a
        let b;//initializing varible b
        let c;//initializing varible c

        a=8;//assing values to varible a
        b=50;//assing values to varible b

        c = a+ b// adding a+b and assing it to varible c
        
        console.log(c);// displaying varible c.
    }
}

const circleCircle = new Circle(1);//Creating a new object.
console.log(circleCircle);//displaying the object properties.
circleCircle.draw();//calling a methode by using the object.

//add or delete properties of an object

const circleAdd = {
radiusCircleAdd :1
};

circleAdd.colorAdd = 'black';
circleAdd.drawAdd = function () { }

delete circleAdd.colorAdd;

console.log(circleAdd);


 
//Value vs ReferenceType

let x = 10;// Value Type
let y = x;
x = 20;

console.log(x);
console.log(y);

let xOne = {value : 10};//Reference Type
let yOne = xOne.value ;

console.log('xOne :',xOne);
console.log('yOne :',yOne);

//Ex2:
let objObj ={value: 10};

function increase (objObj){
    objObj.value++;
}

increase (objObj);
console.log(objObj);

 
//Template litral

const nameLitral = 'Aleena';

const mail =

`Hi ${personNew.nameNew},${personNew.ageNew},

Thank u for coming into my life,

Thanks and regards,

Akram.`;

console.log(mail);

oddEvenConsole();

function oddEvenConsole(){
    console.log('this is to see this work or not');
}


//Date Object

const now = new Date ();
const dateOne = new Date ('May 11 2018 09:00');
const dateTwo = new Date (2017,2,12,20,35);

now.setFullYear(2017);

console.log('Now :',now);
console.log('Date One :',dateOne);
console.log('Date Two :',dateTwo);

const nowOne = now.toDateString();
console.log(nowOne);

const nowTwo = now.toISOString();
console.log(nowTwo);

//Exercise in Object

const address = {
    street  :   'Dycus Road',
    city    :   'Nellore',
    zipCode :   '542001'
};

function showAddress (address){
    for (let key in address )
    console.log(key,address[key]);
}

showAddress (address);

//Factory and Constructor Function

function addressFactorty (street, city , zipCode)
{
    return {
        street,
        city,
        zipCode
    };
    
}

let createAddress = addressFactorty('Dycuss road','Nellore','524001')
console.log('CreateAddress:',createAddress);


function Address (street,city,zipCode)
{
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const addressConstructor = new Address ('Dycuss road','Nellore','524001');
const addressConstructorOne = new Address ('Dycuss road','Nellore','524001');

console.log('AddressConstructor:',addressConstructor);

//Object Equality

console.log (areEquals(addressConstructor,addressConstructorOne));
console.log (areSame(addressConstructor,addressConstructorOne));

// The areEquals checks that all the properties are equal are not 

function areEquals(addressConstructor , addressConstructorOne)
{
return  addressConstructor.street === addressConstructorOne.street &&
        addressConstructor.city === addressConstructorOne.city &&
        addressConstructor.zipCode === addressConstructorOne.zipCode;
}

// The areSame checks that refrence of the function are same or not
function areSame ( addressConstructor, addressConstructorOne)
{
return addressConstructor === addressConstructorOne;
}


// blog post exercise

const blogPost = {
    title    : 'Tech',
    body     : 'This is tech',
    author   : 'akram',
    views    : 76,
    comments : [
      {authorComment : 'Aleena', bodyComment   : 'This is tech'},
      {authorComment : 'Kausar', bodyComment   : 'This is tech'},
    ],
    isLive : true
};

console.log(blogPost);


function BlogPost (title,body,author,[authorComment, bodyComment])
{
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [authorComment , bodyComment];
    this.isLive = false;
}

const blogPostB = new BlogPost('Tech','This is tech new','Aleena',['Kausar','Super'])
console.log(blogPostB);

// Price range exercise
let priceRanges = [
{ label : '$', tooltip :'Inexp', minperperson : 1 , maxperperson : 10},
{ label : '$$', tooltip :'Medium', minperperson : 11 , maxperperson : 20},
{ label : '$$$', tooltip :'Exp', minperperson : 21 , maxperperson : 50}
];

let resturant =[
{averageperperson : 5} // need to have this proprty on that.  
];


//Arrays

// Adding element
const numberArrays = [3,4];

console.log(numberArrays);

//adding at the End
numberArrays.push(5,6);

console.log(numberArrays);

//adding at the Beginning
numberArrays.unshift(1,2);

console.log(numberArrays);

//adding at the Middle
numberArrays.splice(2,0,'a','b');

console.log(numberArrays);


// finding element Primitives

let numberArraysFinding = [1,2,3,4,1,5];

let resultFind = numberArraysFinding.indexOf(1);
console.log('resultFind : ',resultFind);

let resultFindLast = numberArraysFinding.lastIndexOf(1);
console.log('resultFindLast : ',resultFindLast);

let resultFindIsThere = numberArraysFinding.includes(3);
console.log('resultFindIsThere : ',resultFindIsThere);

let resultFindSecondArgument = numberArraysFinding.indexOf(1 , 1);
console.log('resultFindSecondArgument: ',resultFindSecondArgument);


// finding element Reference 

const courses = [
    { id: 1, name: 'Tech' },
    { id: 2, name: 'Technical' },
];

const course = courses.find(function (course) {//pridicate function or call back function
    return course.name === 'Tech';
});
const courseOne = courses.findIndex(function (course) {//pridicate function or call back function
    return course.name === 'Tech';
});

console.log(course);
console.log(courseOne);

//The above can be wriiten as below
//Arrow Function

const courseArrow = courses.find(course => course.name === 'Tech');
const courseArrowIndex = courses.findIndex(course => course.name === 'Tech');

console.log('CourseArrow :',courseArrow);
console.log('CourseArrowIndex :',courseArrowIndex);


//Removing elements from the array
const numberArraysRemoving =[1,2,3,4,5,6,];

//removing at the end 
const last = numberArraysRemoving.pop();
console.log(numberArraysRemoving,'Last :',last);

//removing at the beginning
const first = numberArraysRemoving.shift();
console.log(numberArraysRemoving,'First :',first);

//removing at the middle
const middleArrey = numberArraysRemoving.splice(2,1);
console.log(numberArraysRemoving,'MiddleArrey :',middleArrey);


//Emptying an array
let numberArraysEmptying = [1,2,3,4,5,6,];
let anotherNumberArraysEmptying = numberArraysEmptying;

//solution 1:
//numberArraysEmptying = [];

console.log('numberArraysEmptying',numberArraysEmptying);
console.log('anotherNumberArraysEmptying',anotherNumberArraysEmptying);


//solution 2:
numberArraysEmptying.length = 0;

console.log('numberArraysEmptying',numberArraysEmptying);
console.log('anotherNumberArraysEmptying',anotherNumberArraysEmptying);

//solution 3:
//numberArraysEmptying.splice (0,numberArraysEmptying.length);

console.log('numberArraysEmptying',numberArraysEmptying);
console.log('anotherNumberArraysEmptying',anotherNumberArraysEmptying);

//solution 4:
//while(numberArraysEmptying.length > 0 )
//numberArraysEmptying.pop(); 

console.log('numberArraysEmptying',numberArraysEmptying);
console.log('anotherNumberArraysEmptying',anotherNumberArraysEmptying);


//combining and sliceing

let numberArraysFirst = [1,2,3,4];
let numberArraysSecond = [5,62,73,84];
let numberArraysThird = [{id : 1, nameArray : 'newly'}];

const combine = numberArraysFirst.concat(numberArraysSecond, numberArraysThird);
numberArraysThird[0].id = 21;
const combined = [...numberArraysThird,...numberArraysSecond,...numberArraysFirst];//Spread Operator
const sliceing = combine.slice (2,7);

console.log('combine  :',combine);
console.log('combined :',combined);
console.log('sliceing :',sliceing);


//itarating an array
let numberItarate = [1,2,3,4];

for (let numberIt of numberItarate)
console.log(numberIt);

//using forEach()    
numberItarate.forEach((numberIt,index) => console.log(numberIt,index));


//joining the array
const numJoin = [1,2,3];
const joined = numJoin.join(',');
console.log(joined);

const messSplit = "This is first string";
const splits = messSplit.split(' ');
console.log(splits);

const splitsJoin = splits.join('-');
console.log(splitsJoin);


//sorting an array
numSort = [2,3,1,3,5,2,7,9,1,8];
console.log('numsort',numSort);

numSort.reverse();
console.log('reverse',numSort);

numSort.sort();
console.log('sorting',numSort);

//when there is objects involve
const courseSort = [
    { id : 1 , name : 'Node.js'},
    { id : 2 , name : 'javascript.js'}
];

courseSort.sort (function(a,b){
//a < b => -1
//a > b => 1
//a === b => 0

const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();

if (nameA < nameB) return -1;
if (nameA > nameB) return 1;
return 0;
});

console.log(courseSort);

//Every function
numEvery = [2,3,1,-3,5,2,7,9,1,8];

const allPositive = numEvery.every(function (valueEvery) {
    return valueEvery >= 0
});

console.log('allPositive : ', allPositive);

const allPositiveArrow = numEvery.every(valueEvery => valueEvery >= 0);//This is by using the arrow function

console.log('arrow function Every : ', allPositiveArrow);

//Some function
const atLeastOnePositive = numEvery.some(function(valueSome){
    return valueSome >= 0;
});

console.log('atLeastOnePositive : ', atLeastOnePositive);

const atLeastOnePositiveArrow = numEvery.some(valueSome => valueSome >= 0);//This is by using the arrow function

console.log('arrow function Some : ', atLeastOnePositiveArrow);

//Filter function

//numEvery = [2,3,1,-3,5,2,7,9,1,8];

const filtered = numEvery.filter(function(valueFilter){
    return valueFilter >=0 ;
});

console.log('filetered :', filtered);

const filteredArrow = numEvery.filter(valueFilteraarrow => valueFilteraarrow >=0);

console.log('filetered Arrow :', filteredArrow);


const resturantArrayObject = [
    { name: 'AB', place: 'Moritius', rating: '***', openingTimming: 2, closingTimming: 11 },
    { name: 'CD', place: 'Morit', rating: '*', openingTimming: 6, closingTimming: 9 },
    { name: 'EF', place: 'Moriti', rating: '****', openingTimming: 3, closingTimming: 10 },
    { name: 'GH', place: 'Moritu', rating: '**', openingTimming: 5, closingTimming: 10 },
];

const filterResuturant = resturantArrayObject.filter(function(op) {
   if  (op.openingTimming >= 3 ) return -1 ;
});
const filterResuturantOne = resturantArrayObject.filter(op => {if (op.openingTimming >= 3 ) return -1 ;
});
// how to include the two condition with &&.
console.log('Filtered Resturant',filterResuturantOne);

const sortFilter = filterResuturant.sort((op,cl) => {
    return op.openingTimming - cl.openingTimming;
});

console.log('Sorted Filtered Resturant',sortFilter);


// Map method 
numMap = [2,3,1,-3,5,2,7,9,1,8];

const filMap = numMap.filter( n => n >= 0);
const filMapItem = filMap.map(n => '<li>' + n + '</li>');
const html ='<ul>' + filMapItem.join('') + '</ul>';

console.log('filMap :',filMap);
console.log('filMapItem : ',filMapItem);
console.log('html :',html);


// Map method for objects

numMapObj = [2,3,1,-3,5,2,7,9,1,8];

const filMapObj = numMapObj.filter(n => n >= 0);
const filMapObjItems = filMapObj.map ( n => {
    const objItems = {value : n};
    return objItems;
});

console.log('filMapObjItems :',filMapObjItems);

// Map method with channing

numMapChain = [2,3,1,-3,5,2,7,9,1,8];

const filMapChain = numMapChain.filter(n => n >= 0)
.map(n => '<li>' + n + '</li>')
.join('');

console.log('filMapChain :',filMapChain);

// Map method for objects with channing

numMapObjChain = [2,3,1,-3,5,2,7,9,1,8];

const filMapObjChain = numMapObjChain.filter(n => n >= 0)
.map ( n => {
return {value : n};
});

console.log('filMapObjChain :',filMapObjChain);

// solution 2
numMapObjChain1 = [2,3,1,-3,5,2,7,9,1,8];

const filMapObjChain1 = numMapObjChain1
.sort()
.filter(n => n >= 0)
.map ( n => ({Resturant : n}) )
.filter(obj => obj.Resturant >1);
//.map ( obj => obj.akram)
//.filter (n => n > 2);

console.log('filMapObjChain1 :',filMapObjChain1);

//reducing an array

const numReducing = [2,3,1,-3,5,2,7,9,1,8];

let sumReduce = 0;
for (let n of numReducing)
 sumReduce += n;

console.log('sumReduce :',sumReduce);

const sumReduceFunc0 = numReducing.reduce((accumulator,currentValue) => {
 return accumulator + currentValue;
},0); 

console.log('sumReduceFunc0 :',sumReduceFunc0);

const sumReduceFunc = numReducing.reduce(
   (accumulator,currentValue) =>  accumulator + currentValue
); 
   
console.log('sumReduceFunc :',sumReduceFunc);

//Exercise

//array from range

const numRange = arrayFromRange(-10, -4);

console.log(numRange);

function arrayFromRange(min,max){
    const outputRange = [];
    for (let i= min ; i <= max ; i++)
     outputRange.push(i);
    return outputRange
}

// Rewritting the include function 

const numIncludes = [1, 2, 3, 4];
const display = numyIncludes(numIncludes, 6);
const display1 = numyIncludes(numIncludes, 4);

console.log('display  :', display);
console.log('display1 :', display1);

function numyIncludes (array, searchElement) {
    for (let n of array)
        if (n === searchElement)
         return true;
    return false;
}

// Except funciton

const numExcept = [1, 2, 3, 4];
const numRemove = [1, 4];
const outpu =  except(numExcept,numRemove);

console.log('outputExceptA',outpu);

function except(array, exclude){
    const outputExcept = [];
    for (let n of array)
        if (!exclude.includes(n))
            outputExcept.push(n);
        return outputExcept;
}

// Moving an element

const numMoving = [1, 2, 3, 4];
const outputElement = movingElement (numMoving, 0 , 3);

console.log('The original : ', numMoving, 'The moved :', outputElement);

function movingElement (array,index,offset){
//Offset is the index where the user wants to move the element to.
//Index is the index of the element from where the user wants to move it.  
const position = index + offset;
if (position >= array.length || position < 0)
{   
    console.error('Invalid Offset');
    return ;
}
const outputElement = [...array];
const element = outputElement.splice(index, 1) [0];
outputElement.splice(position, 0 , element);
return outputElement;
}

//Count Occurance
const numOccur = [1, 2, 3, 4];
const count = countOccurance(numOccur,5);

console.log('How many are present in : ',count);

function countOccurance(array , searchElementOccur){
    let count = 0;
    for (let ele of array)
        if (ele === searchElementOccur)
        count++;
    return count;
}

// solution 2
const numOcc = [1, 2, 3, 4];
const countSol = countOccur(numOcc,1);
console.log('How many are present in solution 2 : ', countSol);

function countOccur(arrayOne, searchElementOccurOne) {
    return arrayOne.reduce((accumulatorOne, currentValueOne) => {
        const Occura = (currentValueOne === searchElementOccurOne) ? 1 : 0;
        console.log(accumulatorOne, currentValueOne, searchElementOccurOne);
        return accumulatorOne + Occura;
    }, 0);
}

//Get max

const numMax = [1, 2, 3, 4];
const numMaxSol = getMax(numMax);

console.log('numMaxSol',numMaxSol);

function getMax(array){
    if ( array.length === 0 ) return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++ )
        if ( array[i] > max)
        max = array[i];

    return max ;
}


//solution 2:

const numMax2 = [1, 2, 3, 4];
const numMaxSol2 = getMaxSol2(numMax2);

console.log('numMaxSol2',numMaxSol2);

function getMaxSol2(array){
    if ( array.length === 0 ) return undefined;
    return array.reduce((a, b) => (b > a) ? b : a );
}

// Get movies

const movies = [
    {title:'a', years: 2018, rating : 4.5},
    {title:'b', years: 2018, rating : 5},
    {title:'c', years: 2016, rating : 4.7},
    {title:'d', years: 2017, rating : 3},
    {title:'e', years: 2018, rating : 3.5},
    {title:'f', years: 2016, rating : 3.2},
];

//Last excercise
//All the movies in the 2018 with rating >4
//sort them by thier rating
//Descending Order
//Pick their title

const getMovies = movies
    .filter(m => m.years === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
   
console.log(getMovies);