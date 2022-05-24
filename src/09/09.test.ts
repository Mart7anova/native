type userType = {
    name: string
    age: number
}


function addAge(user: userType) {
    user.age++
}

test(('test mutability object'), () => {

    let user: userType = {
        name: 'Nastya',
        age: 23
    }

    addAge(user)
    expect(user).toEqual({name: 'Nastya', age: 24})

    const superman = user
    superman.age = 1000
    expect(user).toEqual({name: 'Nastya', age: 1000})

})

test(('test mutability array'), () => {

    let users: Array<userType> = [
        {
            name: 'Nastya',
            age: 23
        },
        {
            name: 'Vova',
            age: 18
        },
    ]

    addAge(users[0])
    expect(users[0]).toEqual({name: 'Nastya', age: 24})

    const superusers = users
    superusers[1].age = 1000
    expect(users[1]).toEqual({name: 'Vova', age: 1000})

})

test(('test immutability primitives'),()=>{
    let usersCount = 100
    let adminCount = usersCount
    adminCount++

    expect(usersCount).toBe(100)
    expect(adminCount).toBe(101)
})

test(('test2 mutability object'), () => {
    type userType = {
        name: string
        age: number
        address:{title: string}
    }

    let user: userType = {
        name: 'Nastya',
        age: 23,
        address: {
            title: 'Minsk'
        }
    }
    const addr = user.address

    let user2: userType = {
        name: 'Vova',
        age: 19,
        address: addr
    }

    user2.address.title = 'Kanary'

    expect(user.address?.title).toBe('Kanary')

})