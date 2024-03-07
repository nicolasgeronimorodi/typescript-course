//Scenario: creating a new user with some properties like username, email, db id, discount code

interface UserInterface {
    readonly dbId: number,
    email: string,
    userId: number,
    googleToken?: string

    //startTrial: ()=> string
    startTrial(): string
    getCoupon(coupounName: string, value: number): number
}

const nico: UserInterface = {
    dbId: 992244,
    email: 'mail@gmail.com',
    userId: 232424,
    githubToken: '202wewd2',
    startTrial: ()=> {
        return 'trial started'
    },
    getCoupon: (name: 'nico', val: 10)=> {
        return 10
    }
}

nico.email='h@hc.com '

interface UserInterface {
    githubToken: string
}
interface AdminInterface extends UserInterface {
    role: 'admin' | 'ta' | 'learner'  //literals
}

const juan: AdminInterface = {
    dbId: 992244,
    email: 'mail@gmail.com',
    userId: 232424,
    githubToken: '202wewd2',
    role: 'admin',
    startTrial: ()=> {
        return 'trial started'
    },
    getCoupon: (name: 'nico', val: 10)=> {
        return 10
    }
}


