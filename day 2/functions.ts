// Functions - > ensures  1. Proper parameter   2. Proper return type   3. Catch errors before execution

// 1. By Parameter type + Return Type

 function hello(name : string): string {
    return "Welcome " + name;
}

 console.log(hello("Zara"))    // op : Welcome Zara

// 2. By Default Parameters

 function score(name:string, score : number){
     console.log( name + " : " + score )
 }
 score("hem",97)            // op : hem : 97

// 3. By optional parameters (?) -> not compulsory to pass parameters

function my_name(name : string,initial? : string){
    console.log(name,initial)
}

my_name("Gio");        // Gio  undefined


// 4. By Rest parameters(...)  -> used when no.of parameters are unknown 

function total(...a:number[]){
    return a;
}

console.log(total(10,20))          // op : [10,20]
 






