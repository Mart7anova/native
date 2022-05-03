import {CityType, governmentBuildingsType, housesType} from '../02/02';

export const addMoneyToBudget=(building:governmentBuildingsType, budget:number)=>{
    building.budget += budget
}

export const repairHouse = (houses:housesType )=>{
    houses.repaired = true
}

export const toFireStaff=(building:governmentBuildingsType, staffCount:number)=>{
    building.staffCount -= staffCount
}
export const toHireStaff=(building:governmentBuildingsType, staffCount:number)=>{
    building.staffCount += staffCount
}