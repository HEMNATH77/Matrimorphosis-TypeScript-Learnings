// Generics 

//        Allows us to create reusable components that works with multiple types instead of locking to one type.

//        makes functions and classes type safe while eeping them flexible



// Without Generics       -> Type safety may lost due to acceptance of any type

function printData(data: any){
       console.log(data);
}

printData(5);
printData("Vanakam thalaivarey")


// With Generics   -> Type safety maintained   
//                    T -> type variable and its standard. 
function  printData <T> (data:T) : T {
       return data;
}

console.log(printData <number>(7));
console.log(printData <string>("Vanakam thalaivarey"));






