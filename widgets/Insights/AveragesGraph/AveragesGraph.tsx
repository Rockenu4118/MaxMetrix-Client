import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { metricFormatter, metricConverter } from '../../../utils/formatters'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
)
import useFetch from '../../../hooks/useFetch'
import Spinner from '../../../components/Spinner/Spinner'


export default function AverageGraph({ metric }: any) {

    const { response: averageData, loading } = useFetch("/insights/averages/" + metric + "/2022/2028")

    const yAxisVelo = "Velo (mph)"
    const yAxisTime = "Time (sec)"

    let yAxisText = ""
    let dataSetLabel = ""

    switch (metricConverter(metric)) {
        case "exit_velo":
            dataSetLabel = "Exit Velo"
            yAxisText = yAxisVelo
            break
        case "pulldown_velo":
            dataSetLabel = "Pulldown Velo"
            yAxisText = yAxisVelo
            break
        case "of_velo":
            dataSetLabel = "Outfield Velo"
            yAxisText = yAxisVelo
            break
        case "if_velo":
            dataSetLabel = "Infield Velo"
            yAxisText = yAxisVelo
            break
        case "pop_time":
            dataSetLabel = "Pop Time"
            yAxisText = yAxisTime
            break
        case "thirty_time":
            dataSetLabel = "30 Yard Dash"
            yAxisText = yAxisTime
            break
        case "sixty_time":
            dataSetLabel = "60 Yard Dash"
            yAxisText = yAxisTime
            break
        case "fb_velo_top":
            dataSetLabel = "Fastball Velo"
            yAxisText = yAxisVelo
            break
        default:
            dataSetLabel = ""
            yAxisText = ""
            break
    }

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: ''
            },
            datalabels: {
                backgroundColor: function(context: any) {
                  return context.dataset.backgroundColor;
                },
                borderRadius: 10,
                color: 'white',
                font: {
                  weight: 'bold'
                },
                formatter: Math,
                padding: 5
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: yAxisText
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Graduating Class'
                }
            }
        }
    }

    const labels = ['2028', '2027', '2026', '2025', '2024', '2023', '2022']

    const data = {
        labels: labels,
        datasets: [
            {
                label: dataSetLabel,
                data: averageData.map((data: any) => metricFormatter(data, metricConverter(metric))),
                borderColor: 'rgb(3, 5, 31, 0.9)',
                backgroundColor: 'rgba(3, 5, 31, 0.9)'
            }
        ]
    }

    if (loading) {
        return (
            <Spinner size="sm" className="h-48"/>
        )
    } else {
        return (
            <Line options={options} data={data} />
        )
    }
}