import HighchartsReact from "highcharts-react-official";
import Highcharts, { SeriesLineOptions } from "highcharts"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useMemo } from "react";
import { selectOption } from "../../lib/const";
import { ChartContainer } from "./Chart.styles";

const Chart: React.FC = () => {

    const { lists, age, prefectures } = useSelector((state: RootState) => state.resas)

    const option = useMemo(() => {
        const categories = lists.length ? lists[0]?.data[0].data.map(item => item.year.toString()) : [];
        const chartData = lists.map(item => {
            const name = prefectures[item.prefCode - 1].prefName
            const i = selectOption.indexOf(age);
            const data: SeriesLineOptions = {
                type: "line",
                name,
                data: item.data[i].data.map(item => item.value)
            }
            return data
        })

        const options: Highcharts.Options = {
            title: {
                text: ""
            },
            xAxis: {
                title: {
                    text: "年度"
                },
                categories: categories,
            },
            yAxis: {
                title: {
                    text: "人口数",
                }
            },
            series: chartData.length === 0
                ? [{ type: "line", name: "都道府県名", data: [] }]
                : chartData,
        }
        return options
    }, [lists, age, prefectures])
    return (
        <ChartContainer>
            <HighchartsReact highcharts={Highcharts} options={option} />
        </ChartContainer>

    )
}

export default Chart;