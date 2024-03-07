const User = {
    name: 'Nicolas',
    email: 'nicolas@gmail.com',
    isActive: true
}


/*
Object Types

Apart from primitives, the most common sort of type you’ll encounter is an object type.
 This refers to any JavaScript value with properties, which is almost all of them! 
To define an object type, we simply list its properties and their types.
*/

function createUser({name: string, isPaid: boolean}){

  }


function createCourse():{name: string, price: number}{
    return {name: 'react', price: 99}
}

let newUser = {name: 'nicolas', isPaid: true, email:'mail@mail.com'  }
createUser(newUser) // Odd behavior of typescript. Try to do the same thing without passing a variable 

// createUser({name: 'nicolas', isPaid: true, email:'mail@mail.com'})




export{}