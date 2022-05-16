const age = [25,46,53,64,99,100,90,87,31]

const predicate = (age:number) => age>90

const oldAges = [99,100] //>90

type curseType={
    title: string
    price:number
}

const curse =[
    {title: 'HTML', price: 100},
    {title: 'CSS', price: 150},
    {title: 'REACT', price: 300}
]

const cursePredicate = (curse:curseType) => curse.price <150

const shipPrice = [100]//<150