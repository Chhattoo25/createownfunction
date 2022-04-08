function myArray(){

    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,// dont count this property

    })
    this.length = arguments.length
    // 0:x,
    // 1:y 
    // 2:z
    // lhs[index]=rhs[value]

    for(let i = 0;i<this.length;i++){
        this[i]=arguments[i]
    }
}

let a2 = new myArray("x","y","z")
// console.log(Object.values(a2))
// Own push function
myArray.prototype.ਪੁਸ਼ = function(value){
    let index = this.length
    this[index] = value
    this.length++;
}

// pop function
myArray.prototype.ਹਟਾਓ = function(){
    let index = this.length-1
    delete this[index]
    this.length--
}


// find last value or top of the stack
myArray.prototype.ਆਖਰੀ = function(){
    let index = this.length-1
    console.log(this[index])
}


// print all the value (e.g. [1,2,3,4]).
myArray.prototype.print = function(){
    let bag = []
    for(let i = 0;i<this.length;i++){
        bag.push(this[i])
    }
    console.log(bag)
}


// reverse the array 
myArray.prototype.ਰਿਵਰਸ= function(){
    let bag = []
   for(let i =this.length-1;i>=0;i--) {
       bag.push(this[i])
   }
   console.log(bag)
}


// find size or last length of the array
myArray.prototype.size = function(){
    let size = this.length
    console.log(size)
}
a2.ਪੁਸ਼(4)
a2.ਪੁਸ਼(3)
a2.ਪੁਸ਼(5)
a2.ਪੁਸ਼(6)
a2.ਹਟਾਓ()
a2.ਹਟਾਓ()
a2.print()
a2.ਰਿਵਰਸ()
a2.ਆਖਰੀ()
a2.size()
console.log(a2)