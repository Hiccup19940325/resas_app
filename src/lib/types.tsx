
export interface Prefecture {
    prefCode: number
    prefName: string
}

export interface ResasState {
    prefectures: Prefecture[]
    isLoading: boolean
    age: string
    lists: PopulationInfo[]
}

export interface PopulationInfo {
    prefCode: number
    data: AgeData[]
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