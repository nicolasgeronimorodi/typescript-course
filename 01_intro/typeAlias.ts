
type User = {
    name: string;
    email: string;
    isActive: boolean
} 


function createUser(user: User):User{
    return {name: 'nicolas', email: 'nicolas@gmail.com', isActive: true}

}
//Valido 
createUser({name: 'nicolas', email: 'nicolas@gmail.com', isActive: true})

