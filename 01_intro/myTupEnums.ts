//const user: (string | number)[] = ['hc'] --> No restringe orden

let userTuple: [string, number, boolean] //--> Restringe orden
userTuple = ['hc', 131, true]
//userTuple= [true, 123, 'hc']

let rgb: [number, number, number]=[255, 123, 112]

type UserTuple = [number, string]
const newUser:UserTuple = [112, 'example@gmail.com']

newUser[1]='example2@gmail.com' //--> Cuidado, aca estamos cambiando el valor de la tupla en la posicion 1
newUser.push('example3@gmail.com', 2223) //---> Cuidado, se permite el cambio de orden del tipo de dato.