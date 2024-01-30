
export interface Prefecture {
    prefCode: number
    prefName: string
}

export interface ResasState {
    isLoading: boolean
    lists: PopulationInfo[]
    age: string
}

export interface PopulationInfo {
    prefCode: number
    population: AgeData[]
}


export interface AgeData {
    label: string
    data: Population[]
}

export interface Population {
    year: number
    value: number
}

export interface Item {
    id: number
    text: string
}

export interface SelectProps {
    items: Item[]
}