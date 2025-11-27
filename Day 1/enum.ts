// enum -> important for angular.... Stores Named Constants

// 1. Numeric Enum  -> we don't assign values it starts from 0 automatically and we also assign them

enum direction{
    north,
    south,
    east
}

console.log(direction.east)  // 2     -> returns the index value

// 2. Sting enum ->All Values are strings. Useful when readable output is needed

enum roles{
    admin ="Zara",
    user ="Client 1",
    Guest = "limbo "
}

console.log(roles.admin)   // op: zara 


// 3. Reverse Mapping  -> only suits for numeric enums 

enum color{
    red  = 1,
    blue ,
    yellow
}

console.log(color[0])  // op : undefined (because we assigned from 1 not from 0)
console.log(color[3])    // op : yellow
