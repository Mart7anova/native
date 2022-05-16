test('only people over 90', ()=>{
    //action
    const age = [25,46,53,64,99,100,90,87,31]

    /*const predicate = (age:number) => age>90
    const oldAges = age.filter(predicate)*/
    const oldAges = age.filter(age=>age>90)

    //expect result
    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(99)
    expect(oldAges[1]).toBe(100)

})

test('only courses whose price is below 150', ()=>{
    //action
    const curse =[
        {title: 'HTML', price: 100},
        {title: 'CSS', price: 150},
        {title: 'REACT', price: 300}
    ]

    /*const cursePredicate = (curse:curseType) => curse.price <150
    const shipPrice = curse.filter(cursePredicate)*/
    const shipPrice = curse.filter(c=>c.price<150)

    //expect result
    expect(shipPrice.length).toBe(1)
    expect(shipPrice[0].title).toBe('HTML')
})

test('get only completed tasks',()=>{
    //action
    const tasks=[
        {id:1, title:'bread',idDone:false},
        {id:2, title:'milk',idDone:true},
        {id:3, title:'wine',idDone:false},
        {id:4, title:'cookies',idDone:true}
    ]
    const completedTasks = tasks.filter(t=>t.idDone)

    //expect result
    expect(completedTasks[0].title).toBe('milk')
    expect(completedTasks[1].title).toBe('cookies')
})