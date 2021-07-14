// careful with:
// eval()
// for in (better use Object.keys)
// with
// delete

// Main reasons theese are bad are the follwing:
// hidden classes
// inline caching


// INLINE CACHING
const findUser = user => `found ${user.firstName} ${user.lastName}`

const userData = {
  firstName: 'John Doe',
  lastName: 'Doe'
}

findUser(userData)
// due to inline caching, code that executes the same method repeatedly
// can be optimized
// so instead of looking up userData every time
// it'll inline cache, so findUser simply becomes a string 'found John Doe'


// HIDDEN CLASSES
function foo(x, y) {
  this.x = x
  this.y = y
}

// obj0 and obj1 have the same hidden class (same properties)
const obj0 = new foo(0, 1)
const obj1 = new foo(2, 3)

// but as soon as you start introducing things in different orders, it's gonna get confused
// it's gonna slow things down
// so it's better to assign all properties in the constructor
// or at least define them in the same order
obj0.a = 30
obj0.b = 10

obj1.a = 10
obj1.b = 30

// same issue with delete
delete obj1.b
