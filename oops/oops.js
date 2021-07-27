console.log('Hello everyone');

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 2
    },
    draw : function(){
        console.log('Draw',circle.location.x * circle.location.y,);
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