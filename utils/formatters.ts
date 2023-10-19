export const metricFormatter = (number: any, metric: String) => {
 
    if (number === null || number === undefined) {
        return number
    }

    if (metric === "pop_time" || metric === "thirty_time" || metric === "sixty_time") {
        return number.toFixed(2)
    } else {
        return number
    }
}

export const metricConverter = (metric: any) => {

    if (!metric) {
        return
    }

    const convertedMetric = metric.replace('-', '_')

    return convertedMetric
}

export const metricRankingFormatter = (player: any, metricName: String) => {

    const metric = metricName.replace(/-/g, '_')
    const val = player[metric]

    if (val === null || val === undefined) {
        return val
    }

    if (metric === "pop_time" || metric === "thirty_time" || metric === "sixty_time") {
        return val.toFixed(2)
    } else {
        return val
    }
}

export const measurementFormatter = (metricName: String) => {

    const metric = metricName.replace(/-/g, '_')

    if (metric === "pop_time" || metric === "thirty_time" || metric === "sixty_time") {
        return "Time"
    } else {
        return "Velo"
    }
}

export const dateFormatter = (ts: any) => {

    const date = new Date(ts.slice(0, -1))
    
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const newDate = month + "/" + day + "/" + year

    return newDate

}