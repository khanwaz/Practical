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
    let baseLocationAbs = {x:0 , y :0};
    this.radiusAbs = radiusAbs ;
    
    this.computeAbs = function(a,b){
        console.log(a+b);
    }
    this.drawAbs = function (){
        this.computeAbs(2,6);

        console.log(this.drawAbs);
    };
}
 
const circleAbsA = new CircleAbs(12);
console.log( circleAbsA.drawAbs());


