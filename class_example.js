
class person{
    // this is how we create a filed|property
    firstName;
    lastName;
    // constructor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName; 
    }

    // this is how we create method | function
    // inside the class
    printFullName(){
        console.log("Full Name :"+this.firstName + " "+ this.lastName);
    }

    getUpperCaseFirstName(){
        return this.firstName.toUpperCase();
    }
}

let p1 = new person();
p1.firstName = 'Ali';
p1.lastName = 'Alzuhairi';
console.log(p1);
p1.printFullName();
console.log(p1.getUpperCaseFirstName());