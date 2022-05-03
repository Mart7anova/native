import {addTechnologies, changeAge, checkCity} from './03';
import {studentsType} from './03_obj';

let student: studentsType;

beforeEach(() => {
    student = {
        name: 'Ira',
        age: 21,
        isStudents: true,
        address: {
            street: 'Tulskay 5',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'React'}
        ]
    }
})

test('new tech technologies should be added to students', () => {
    //action
    addTechnologies(student, 'Redux')
    addTechnologies(student, 'JS')
    //expect result
    expect(student.technologies[3].title).toBe('Redux')
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[4].title).toBe('JS')
    expect(student.technologies[4].id).toBeDefined()
})

test('does the student live in the city', () => {
    //action
    const result1 = checkCity(student, 'Minsk')
    const result2 = checkCity(student, 'Moscow')

    //expect result
    expect(result1).toBe(true)
    expect(result2).toBe(false)
})

test('age should be changed', () => {
    //action
    changeAge(student,25)

    //expect result
    expect(student.age).toBe(25)
})