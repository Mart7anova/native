export type streetType = {
    title:string
}
export type AddressType={
    number:number
    street: streetType
}
export type housesType={
    buildedAt:number
    repaired:boolean
    address:AddressType
}

export type governmentBuildingsType={
    type:string
    budget:number
    staffCount:number
    address:AddressType
}

export type CityType={
    title: string
    houses:Array<housesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber:number
}

