import {
    makeHairStyle,
    moveUser, updateCompanies,
    updateNewBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from './10'


test('reference type test', () => {
    let user: UserType = {
        name: 'Dima',
        hair: 32,
        address: {title: 'Minsk'}
    }
    const cutUser = makeHairStyle(user, 2)
    //user = cutUser

    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutUser.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'Asus'}
    }
    const newUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(newUser)
    expect(user.address.title).not.toBe(newUser.address.title)
    expect(newUser.address.title).toBe('Kiev')
    expect(newUser.laptop).toBe(user.laptop)
})
test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'Asus'}
    }
    const newUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(newUser)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(newUser.laptop.title).toBe('Macbook')
    expect(newUser.address).toBe(user.address)
    expect(user.laptop.title).toBe('Asus')
})
test('update new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dima',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'Asus'},
        books: ['html', 'css']
    }
    const newUser = updateNewBook(user, 'react')

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(newUser.address).toBe(user.address)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[1]).toBe('react')
    expect(user.books[1]).toBe('css')
})
test('update companies', () => {
    const companies = {
        'Dima': [{id:1, title:'E'},{id:2, title: 'R'}],
        'Ivan': [{id:1, title: 'R'}]
    }

    const copy= updateCompanies(companies, 'Ivan', 1, 'RR')

    expect(companies).not.toBe(copy)
    expect(companies['Dima']).toBe(copy['Dima'])
    expect(companies['Ivan']).not.toBe(copy['Ivan'])
    expect(copy['Ivan'][0].title).toBe('RR')
    expect(companies['Ivan'][0].title).toBe('R')

})