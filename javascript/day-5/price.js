//4. write a class to calculate the Uber price.
class Uber{
    constructor(kilometer,price){
        this.kilometer = kilometer;
        this.price = price;
    }

    get Kilo(){
       return this.price  ;
    }
    set Kilo(km){
       this.price = `${km} km = Rs.${km * 50}`
    }
    
}
const price = new Uber()
price.Kilo = 2;
console.log(price.Kilo)