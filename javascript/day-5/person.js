// 3. Write a “person” class to hold all the details

class Person{
    constructor(name, age, gender, state, country){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

let person = new Person("Ashok", 21, "Male", "Tamil nadu", "India");
console.log(`
Name: ${person.name},
Age: ${person.age},
Gender: ${person.gender},
State: ${person.state},
Country: ${person.country}
`)