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
import { dateFormatter } from '../../../utils/formatters'
import { metricFormatter } from '../../../utils/formatters'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function PlayerProgressionGraph(props: any) {
    const { events, currentMetric } = props

    let yAxisText = ""
    let label = ""
    let suggestedMin = 0
    let suggestedMax = 100
    let stepSize = 5

    switch (currentMetric) {
        case "exit_velo":
            label = "Exit Velo"
            yAxisText = "Velo (mph)"
            suggestedMin = 60
            suggestedMax = 100
            stepSize = 5
            break
        
        case "pulldown_velo":
            label = "Pulldown"
            yAxisText = "Velo (mph)"
            break
        case "of_velo":
            label = "Outfield Velo"
            yAxisText = "Velo (mph)"
            break
        case "if_velo":
            label = "Infield Velo"
            yAxisText = "Velo (mph)"
            break
        case "pop_time":
            label = "Pop Time"
            yAxisText = "Time (sec)"
            suggestedMin = 1.5
            suggestedMax = 3
            stepSize = 0.1
            break
        case "thirty_time":
            label = "30 Yard Dash"
            yAxisText = "Time (sec)"
            suggestedMin = 3
            suggestedMax = 5
            stepSize = 0.1
            break
        case "sixty_time":
            label = "60 Yard Dash"
            yAxisText = "Time (sec)"
            suggestedMin = 5
            suggestedMax = 8
            stepSize = 0.2
            break
        case "fb_velo_top":
            label = "Fastball"
            yAxisText = "Velo (mph)"
            break
        default:
            break
    }

    const labels: any = []
    const metricNumbers: number[] = []
    
    for (let i = 0 ; i < events.length ; i++) {

        let newDate = dateFormatter(events[i].date_attended)

        if (events[i][currentMetric] > 0) {
            labels.push(newDate)
            metricNumbers.push(metricFormatter(events[i][currentMetric], currentMetric))
        }
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
                borderRadius: 15,
                color: 'white',
                font: {
                    weight: 500
                },
                formatter: Math,
            }   
        },
        scales: {
            y: {
                suggestedMin: suggestedMin,
                suggestedMax: suggestedMax,
                ticks: {
                    stepSize: stepSize
                },
                title: {
                    display: true,
                    text: yAxisText
                }
            },
            x: {
                offset: true,
                title: {
                    display: true,
                    text: 'Date'
                }
            }
        }
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: metricNumbers.map((data) => data),
                borderColor: 'rgb(1, 2, 20, 1)',
                backgroundColor: 'rgba(1, 2, 20, 1)',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 8
            }
        ]
    }

    return (            
        <Line options={options} data={data} />
    )
}