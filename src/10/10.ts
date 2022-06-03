export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export const makeHairStyle = (u: UserType, power: number) => {
    return {
        ...u,
        hair: u.hair / power
    }
}
export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {...u.address, title: city}
    }
}
export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) => {
    return {
        ...u,
        laptop: {...u.laptop, title}
    }
}
export const addNewBook = (u: UserWithLaptopType & UserWithBooksType, title: string) => {
    return {
        ...u,
        books: [...u.books, title]
    }
}
export const updateNewBook = (u: UserWithLaptopType & UserWithBooksType, title: string) => {
    const copy = {
        ...u,
        books: [...u.books]
    }
    copy.books[1] = title
    return copy
}

export type CompaniesType = {
    id: number
    title: string
}

export const updateCompanies = (companies: { [key: string]: Array<CompaniesType> },
                                userName: string,
                                companyID: number,
                                newTitle: string) => {
    return {
        ...companies,
        [userName]: [...companies[userName].map(c =>
                c.id === companyID ? {...c, title: newTitle} : c
        )]
    }
}