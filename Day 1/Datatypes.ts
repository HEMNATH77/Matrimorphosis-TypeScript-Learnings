// TypeScript -> Superset of JavaScript adds static typing and type-checking at the compile time
//               Helps developers to finderrors before running the code


// Structure of the code

let my_name : string = "Hemnath";
console.log(my_name)          // In output -> the TS file will be converted to js and then we get a desired output


// Typescript's  Important Datatypes

// 1. any -> accepts Any type of Datatype

let x : any = 10.07;
x = 7;
console.log(x)        // o/p : 7

// 2. Unknown  -> Safer version of any....Cannot use the value directly without checking the type

let d : unknown = "type";
d = 7
console.log(a.toUpperCase());      // error -> because the type has been changed


// 3. void     -> used when function returns nothing

function change(): void{
    console.log("Hello ");
}

change()


// 4. never -> Represents Something that never returns (error or infinite loop)

function error(message : string): never{
    throw new Error(message);
}

error()