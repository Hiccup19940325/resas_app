import { Item } from "./types";

export const apiUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
export const api_population = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear';
export const selectOption: Item[] = [
    {
        text: "総人口",
        id: 0,
    },
    {
        text: "年少人口",
        id: 1,
    },
    {
        text: "生産年齢人口",
        id: 2,
    },
    {
        text: "老年人口",
        id: 3,
    }]

export enum Filter {
    総人口,
    年少人口,
    生産年齢人口,
    老年人口
}