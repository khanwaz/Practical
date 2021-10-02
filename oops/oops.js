console.log('Hello everyone');

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 2
    },
    draw : function(){
        console.log('Draw',circle.location.x * circle.location.y);
    }
};

circle.draw();

//Factory Function
function createCircle(radius){
    return {
        radius,
        draw : function() {
            console.log('draw');
        }
    };
}

const circleFactory = createCircle(1);
circleFactory.draw();

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');       
    }
}

const circleConstructor = new Circle(2);
console.log ( circleConstructor.radius);
const circleConstructorNew = new Circle(3);
console.log ( circleConstructorNew.radius);

//value vs reference

let number = 10;

function incre (number){
    number++;
    console.log(number);
}
incre(number);
console.log(number);


let numberRef = {value : 10, keyRef : 12};

function inc (numberRef){
    numberRef.value++
    numberRef.keyRef++ 
}

inc(numberRef);
console.log(numberRef);


//Adding and Deleting an object property

function CircleFunction (radiusCirFun){
    this.radiusCirFun = radiusCirFun;
    this.draw = function (){
        console.log('Draw');
    }
}

const circleConstructorAdd = new CircleFunction(2);
console.log(circleConstructorAdd.draw());

circleConstructorAdd.locationAdd ={xy: 2};
console.log(circleConstructorAdd);

delete circleConstructorAdd.draw;
console.log(circleConstructorAdd);

for (let ey in circleConstructorAdd)
{
    if (typeof circleConstructorAdd[ey] !== 'function')
    console.log(ey, circleConstructorAdd[ey]);
}

const keysObj = Object.keys(circleConstructorAdd);
console.log(keysObj);

if ('radiusCirFun'in circleConstructorAdd)
    console.log(true);

//Abstraction
function CircleAbs (radiusAbs){
    this.radiusAbs = radiusAbs ;
    
    let baseLocationAbs = {x:0 , y :0};
    
    let computeAbs = function(a,b){
        let c = a + b ;
        return(c);
    }
    this.drawAbs = function (x,y){
        console.log(computeAbs(x,y));
    };
}
 
const circleAbsA = new CircleAbs(12);

// let resultAbsA = 
// console.log ( resultAbsA );

console.log('this is',);
circleAbsA.drawAbs(16,4)

const radiusAbsA = circleAbsA.radiusAbs ;
console.log (radiusAbsA);

console.log('that is',);
circleAbsA.drawAbs(4,6);

// Getters and setters functions

    const personDetailsDupe ={
    firstNameDupe : 'Aleena',
    lastNameDupe : 'Khan',
    Age : '1',    
    get fullNameDupe (){
        return `${personDetailsDupe.firstNameDupe} ${personDetailsDupe.lastNameDupe}`
    },
    set fullNameDupe (value){
        //return `${personDetailsDupe.firstNameDupe} ${personDetailsDupe.lastNameDupe}`
        //console.log(value);
        const fullNameDupeP = value.split(' ') ;
        this.firstNameDupe = fullNameDupeP[0];
        this.lastNameDupe = fullNameDupeP[1];
    }
    };

// const dupeFun = new DupeFun(25);
// console.log(dupeFun.area);
// const nameDupe = dupeFun.personDetailsDupe;
// console.log(nameDupe);

console.log(personDetailsDupe.firstNameDupe);
console.log(personDetailsDupe.fullNameDupe);
personDetailsDupe.fullNameDupe;

personDetailsDupe.fullNameDupe = 'Akram Khani';
console.log(personDetailsDupe.fullNameDupe);

// Getters and setters functions in the constructors
function DupeFun (area) {
    this.area = area;
    
    let defaultArea = {x : 0, y: 0};
    this.getDefaultArea = function (){
        return defaultArea;
    };

    Object.defineProperty(this,defaultArea,{
        get: function(){
            return defaultArea;
        },
        set: function(valueSet){
            if (!value.x || !value.y)

            defaultArea = valueSet;
        }
    });
}
 const dupefuny = new DupeFun(3);
 dupefuny.defaultArea = 1;
 console.log(dupefuny);


 // Stopwatch exercise

function Stopwatch (){
    let startTime, endTime, running, duration = 0;

    this.start = function (){
        if (running)
            throw new Error ('The stopwatch is already running');

        running = true;

        startTime = new Date();
    };

    this.stop = function (){
        if (!running)
            throw new Error ('The stopwatch is not running');

        running = false;

        endTime = new Date();

        const second = (startTime.getTime() - endTime.getTime())/1000;
        duration += second;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0 ;
    };

    Object.defineProperty(this,'duration',{
        get : function()
        { return duration ;}
        });
}

const sw = new Stopwatch();
sw.start();
console.log(sw.duration);
sw.stop();
console.log(sw.duration);