import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
import useFetch from '../../../hooks/useFetch'
import Spinner from '../../../components/Spinner/Spinner';
  
export default function DistributionGraph({ distributionClass, metricName }: any) {

    const { response: distributionData, loading }: any = useFetch("/insights/distributions/" + metricName + "/" + distributionClass)

    // Label data for SD graph will vary based on metric
    let labels = []
    let xAxisLabel = ""

    switch (metricName) {
        case "pop-time":
            labels = ['2.40+','2.39-2.30','2.29-2.20','2.19-2.10','2.09-2.00','1.99-1.90','-1.89']
            xAxisLabel = "Time (sec)"
            break
        case "thirty":
            labels = ['4.80+', '4.79-4.60', '4.59-4.40', '4.39-4.20', '4.19-4.00', '3.99-3.80', '-3.79']
            xAxisLabel = "Time (sec)"
            break
        case "sixty":
            labels = ['7.80+', '7.79-7.60', '7.59-7.40', '7.39-7.20', '7.19-7.00', '6.99-6.80', '-6.79']
            xAxisLabel = "Time (sec)"
            break
        default:
            labels = ['-71', '72-75', '76-79', '80-83', '84-87', '88-91', '92+']
            xAxisLabel = "Velo (mph)"
    }
  
    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: "Class of " + distributionClass
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
                formatter: Math.round,
                padding: 5
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: '# of players'
                }
            },
            x: {
                title: {
                    display: true,
                    text: xAxisLabel
                }
            }
        }
    }

    const data: any = {

        labels: labels,
        datasets: [
            {
                fill: true,
                lineTension: 0.5,
                label: '# of players',
                data: [distributionData?.one, distributionData?.two, distributionData?.three, distributionData?.four, distributionData?.five, distributionData?.six, distributionData?.seven],
                borderColor: 'rgb(12, 46, 102, 0.9)',
                backgroundColor: 'rgba(12, 46, 102, 0.7)',
                datalabels: {
                align: 'center',
                anchor: 'center'
                }
            },
        ],
    }

    if (loading) {
        return (
            <Spinner size="sm" className="h-48" />
        )
    } else {
        return (
            <Line options={options} data={data} />
        ) 
    }
}