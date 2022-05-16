import {manType} from "./destructuring";

let props: manType;
beforeEach(() => {
    props = {
        name: 'Ira',
        age: 23,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Pobeda'
            }
        }
    }
})

test('object', () => {

    //const age = props.age
    //const lessons = props.lessons

    //const a = props.age
    //const l = props.lessons

    const {age, lessons} = props
    // const {age:a, lessons:l} = props

    //но лучше так
    const {title} = props.address.street

    expect(age).toBe(23)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Pobeda')
})

test('massive',()=>{
    // const l1 = props.lessons[0]
    // const l2 = props.lessons[1]

    const [l1,l2] = props.lessons

    // если нужен только 2 элемент
    const [,ls2] = props.lessons
    // если нужен только 3 элемент
    const [,,ls3] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls2.title).toBe('2')
    expect(ls3.title).toBe('3')

    expect(ls3).toStrictEqual({title: '3'})
})