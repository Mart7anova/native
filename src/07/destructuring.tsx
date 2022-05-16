import React, {useState} from "react";

export type manType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type propsType = {
    title: string
    man: manType
    food: Array<string>
    car: { model: string }
}

function useMessState(message:string){
    return [message, function (){}]
}

const ManComponents: React.FC<propsType> = ({title, man, ...props}) => {
    //const {title, man:{name}, ...restProps} = props

    const [mess, setMess] = useState<string>('hello')
    return (
        <div>
            <h1>{title}</h1>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    )
}