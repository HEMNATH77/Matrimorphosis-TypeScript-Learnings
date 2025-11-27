// arrays -> collection of values from the same type 

let a : number[] = [98,97,99];

 //        or 

let names:Array<string> = ["ram","sam","joe"]

console.log(a)

// Common Array Method       -> both add and deletes elements from the last as per the LIFO

// 1. push  -> adding element

a.push(100)
console.log(a)

// 2. pop   -> Deleting element

names.pop()
console.log(names)

// Tuples -> Fixed length + fixed type order

let b : [string,number] = ["hem",21];

console.log(b[0])    // "hem"
console.log(b[1])   // 21 
