//Circle task 
class Circle{
    constructor(radious,color){
        this.radious = radious;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius = radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.Color = color;
    }
    get toString(){
        return `"radius=${this.radius},color=${this.color}"`
    }
    get Area(){
        return Math.PI * this.radius * this.radius;
    }
    get Circumference(){
        return Math.PI * this.radius;
    }
}
const circle = new Circle(1.1,'red')
console.log(circle)

circle.Radius = 1.1
console.log(`radius: ${circle.Radius}`)

circle.color = 'blue'
console.log(`color: ${circle.Color}`)

console.log(`
setColor: ${circle.Color}

toString: ${circle.toString}

getArea: ${circle.Area}

getCircumference: ${circle.Circumference}
`)