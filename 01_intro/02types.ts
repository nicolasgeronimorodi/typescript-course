type Usuario = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number
}

let myUser: Usuario = {
    _id: '123',
    name: 'Nicolas',
    email: 'nicolas@mail.com',
    isActive: true
}

myUser.email= 'nicolas@yahoo.com'
//myUser._id= 'hola'

type cardNumber = {
    cardnumber: string,

}

type cardDate = {
    carddate: string
}

//New type based on the combination of two existing types, however adding the cvv is a bit hacky

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
