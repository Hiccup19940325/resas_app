export const apiUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
export const api_population =
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear'
export const selectOption = ['総人口', '年少人口', '生産年齢人口', '老年人口']

export const mockData = {
    resas: {
        prefectures: [
            {
                prefCode: 1,
                prefName: '北海道'
            },
            {
                prefCode: 2,
                prefName: '青森県'
            },
            {
                prefCode: 3,
                prefName: '岩手県'
            }
        ],
        lists: [
            {
                data: [
                    {
                        label: '総人口',
                        data: [
                            {
                                year: 2015,
                                value: 5015000
                            },
                            {
                                year: 2020,
                                value: 5025000
                            },
                            {
                                year: 2025,
                                value: 5035000
                            }
                        ]
                    },
                    {
                        label: '年少人口',
                        data: [
                            {
                                year: 2015,
                                value: 5015000
                            },
                            {
                                year: 2020,
                                value: 5025000
                            },
                            {
                                year: 2025,
                                value: 5035000
                            }
                        ]
                    },
                    {
                        label: '生産年齢人口',
                        data: [
                            {
                                year: 2015,
                                value: 5015000
                            },
                            {
                                year: 2020,
                                value: 5025000
                            },
                            {
                                year: 2025,
                                value: 5035000
                            }
                        ]
                    },
                    {
                        label: '老年人口',
                        data: [
                            {
                                year: 2015,
                                value: 5015000
                            },
                            {
                                year: 2020,
                                value: 5025000
                            },
                            {
                                year: 2025,
                                value: 5035000
                            }
                        ]
                    }
                ],
                prefCode: 1
            }
        ],
        isLoading: false,
        error: '',
        age: '総人口'
    }
}
