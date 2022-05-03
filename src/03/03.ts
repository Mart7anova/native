import { studentsType } from "./03_obj"


export const addTechnologies = (student: studentsType, technologies: string) =>{
    student.technologies.push({
        id: new Date().getTime(),
        title: technologies
    })
}

export const checkCity = (student:studentsType, city:string)=>{
    return student.address.city.title === city
}

export function changeAge(student:studentsType, age:number){
    student.age = age
}