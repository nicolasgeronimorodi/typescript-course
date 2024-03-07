let score: number | string = 33
score=44
score='55'

type Usuario = {
    name: string;
    id: number

}

type Admin = {
    username: string;
    id: number
}

let nicolas : Usuario | Admin = {
    name: 'nicolas',
    id: 334
}

nicolas = {
    username: 'hc',
    id: 345
}

/*
function getDbRecord(id: number | string) {
    //making API calls
    console.log(`DB is is: ${id}`)
}
*/

function getDbRecord(id: number | string) {

    //Union narrowing

    if(typeof id === 'string'){
        id.toLowerCase()
    }

    else {
        id.toFixed()
    }
    

}

getDbRecord(3)
getDbRecord('3')

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: string[] | number[] = ['1', '2', '3'] // Either all numbers or all string.
const data4: (string | number)[] = ['1', '2', '3', 4, 5, 6]



let setAllotment: 'aisle' | 'middle' | 'window'
setAllotment='aisle'
//seatAllotment'='crew'


