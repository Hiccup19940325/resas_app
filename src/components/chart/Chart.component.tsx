import HighchartsReact from 'highcharts-react-official'
import Highcharts, { SeriesLineOptions } from 'highcharts'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useMemo } from 'react'
import { selectOption } from '../../lib/const'
import { ChartContainer } from './Chart.styles'
import Spinner from '../loadingSpinner/spinner.component'
import Select from '../select/Select.component'

const Chart: React.FC = () => {
    const { lists, age, prefectures, isLoading } = useSelector((state: RootState) => state.resas)

    const option = useMemo(() => {
        const categories = lists.length
            ? lists[0]?.data[0].data.map((item) => item.year.toString())
            : []
        const chartData = lists.map((item) => {
            const name = prefectures[item.prefCode - 1].prefName
            const i = selectOption.indexOf(age)
            const data: SeriesLineOptions = {
                type: 'line',
                name,
                data: item.data[i].data.map((item) => item.value)
            }
            return data
        })

        const options: Highcharts.Options = {
            title: {
                text: ''
            },
            xAxis: {
                title: {
                    text: '年度'
                },
                categories: categories
            },
            yAxis: {
                title: {
                    text: '人口数'
                }
            },
            series:
                chartData.length === 0
                    ? [{ type: 'line', name: '都道府県名', data: [] }]
                    : chartData
        }
        return options
    }, [lists, age, prefectures])

    const showChart = useMemo(() => {
        return (
            lists.length && (
                <>
                    <Select />
                    <ChartContainer>
                        <HighchartsReact highcharts={Highcharts} options={option} />
                    </ChartContainer>
                    {isLoading && <Spinner />}
                </>
            )
        )
    }, [lists, option, isLoading])
    return <>{showChart}</>
}

export default Chart
