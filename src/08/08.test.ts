type UsersType={
    [key: string] : {id: number, name: string}
}

let users: UsersType

beforeEach(()=>{
    users = {
        '100': {id: 100, name: 'Dima'},
        '45678': {id: 45678, name: 'Ira'},
        '1002': {id: 1002, name: 'Dasha'},
        '1': {id: 1, name: 'Misha'}
    }
})

test('should update corresponding user', ()=>{
    users[1].name = 'Anna'

    expect(users[1].name).toBe('Anna')
    expect(users[1]).toEqual({id: 1, name: 'Anna'})
})
test('should delete corresponding user', ()=>{
    delete users[1]

    expect(users[1]).toBeUndefined()
})