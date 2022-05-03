export type cityType ={
    title: string
    countryTitle: string
}

export type addressType={
    street: string
    city:cityType
}

export type technologiesType={
    id:number
    title: string
}

export type studentsType={
    name: string
    age: number
    isStudents:boolean
    address:addressType
    technologies:Array<technologiesType>
}


export const students: studentsType={
    name:'Ira',
    age:21,
    isStudents: true,
    address: {
        street: 'Tulskay 5',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies:[
        {id:1, title: 'HTML'},
        {id:2, title: 'CSS'},
        {id:3, title: 'React'}
    ]
}

