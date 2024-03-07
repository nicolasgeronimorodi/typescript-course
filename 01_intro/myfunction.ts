function addTwo(num: number):number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

function signUpUser(name: string, email: string, isPaid: boolean){
}

/*
function getValue(myVal: number):{
    if(myVal>5){
        return true
    }
    return '200 OK'
}
*/

const getHello = (s: string):string=> {
    return ''
}

const heros = ['thor', 'spiderman', 'ironman'] 
// const heros = [1, 2, 3]
heros.map((hero):string=> {
    return `hero is ${hero}`
})

function consoleError(errorMsg: string):void{
    console.log(errorMsg)
}

function handleError(errorMsg: string):never {
    throw new Error(errorMsg)
}









signUpUser('nicolas', 'nicolas@gmail.com', false)


loginUser('nicolas', 'nicolas@gmail.com')

let myValue = addTwo(5)
getUpper('nicolas')

export {}