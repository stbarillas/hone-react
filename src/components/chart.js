import {Line} from "react-chartjs-2";
import React from "react";

// Takes Dates and days to create dynamic chart with correct number of data points
function RenderChart(props) {
    let chartData = {
        // Slice dates using number of days
        labels: Object.keys(props.dates).slice(31 - props.days, 31),
        datasets: [{
            label: '',
            data: Object.values(props.dates).slice(31 - props.days, 31),
            backgroundColor: [
                "rgb(59, 136, 252, .2)",
            ],
            borderColor: [
                "rgba(0, 0, 0, 0.3)",
            ],
            borderWidth: 3,
            lineTension: .1,
            pointBackgroundColor: "rgb(59, 136, 252)"
        }]
    }
    let chartOptions = {
        title: {
            display: true,
            text: "Historical BTC Data",
            fontSize: 20,
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Price (USD)",
                },
                ticks: {
                    beginAtZero: false
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Date",
                }
            }]
        }
    };

    return (
        <Line
            data={chartData}
            options={chartOptions}
        />
    );
}

export default (RenderChart);