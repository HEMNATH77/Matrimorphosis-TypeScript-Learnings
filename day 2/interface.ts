// Interface : Structure to define the shape of the object... 
//             Acts like a contact for objects,classes,functions...
//             Do not contain implementation details... They only define the structure

syntax :

interface interfaceName{
    propertyName : type;
}


// Basic 

interface user{
    name : string;
    age : number;
    isActive : boolean;
}

const u1: user = {
    name : "hem",
    age : 22,
    isActive : true
};

console.log("user details : ")
console.log("Name : ",u1.name)
console.log(" Age : ",u1.age)
console.log("Active : ",u1.isActive)



// optional(?)

interface car {
    model : string;
    color?:string;
}

const c1: car ={ model : "BMW"} 

console.log("model : ",c1.model)


// important --- interface with classes

interface Animal{
    name : string,
    sound : string;
}

class Dog implements Animal{
    name : "labour dog";
    sound(){
        console.log("bow bow")
    }
}

let b = new Dog();
b.sound()


// interface with methods

interface vehicle{
    name : string;
    start():void;
}

const Car:vehicle = {
    name :"Audi",
    start(){
        console.log("Star the engine")
    }
}

console.log("Name :",Car.name)

// Extending interfaces

interface  animal {
    name : string;
}

interface dog extends animal{
    breed: string;
}

let d : dog = {
    name : "Zaruuu",
    breed : "German shepherd"
}

console.log("Dog name :",d.name)
console.log("Dog breed :",d.breed)












