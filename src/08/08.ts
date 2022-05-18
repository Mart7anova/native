type UsersType={
    [key: string] : {id: number, name: string}
}

export const users: UsersType = {
    '100': {id: 100, name: 'Dima'},
    '45678': {id: 45678, name: 'Ira'},
    '1002': {id: 1002, name: 'Dasha'},
    '1': {id: 1, name: 'Misha'}
}
users[1] //быстро, не важно какая размерность

//создание нового элемента массива
var user = {id: 4513564, name: 'Igor'}
users[user.id] = user

//удаление
delete users[user.id]

//переопределение
users[user.id].name = 'Ignat'

export const usersArray = [
    {id: 100, name: 'Dima'},
    {id: 45678, name: 'Ira'},
    {id: 1002, name: 'Dasha'},
    {id: 1, name: 'Misha'}
]
usersArray.find(u=>u.id ===1) // долго, так как происходить итерирование

//создание нового элемента массива
usersArray.push(user) // возможно добавление дубликата
var userCopy = [...usersArray.filter(u=>u.id !== user.id),user]

//удаление
let newUsersArray = usersArray.filter(u=>u.id !== user.id)