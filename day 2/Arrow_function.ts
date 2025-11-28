// Arrow function -> a shorter syntax to write functions 

// syntax 

const function = (parameters) => {
    // function codes
}

// for only  one statement

const add = (a:number , b: number) => a+b;

console.log(add(7,3))         // op : 10


// Basic using void 

const welcome = () : void => {
    console.log("Hello Ga")
}

welcome();

// With Parameters

const add = (a:number , b : number): number => {
    return a + b;
}

console.log(add(10,7))


// Without parameters 

const sub = (): string =>"hi";{
    console.log(sub())
}
sub()





















