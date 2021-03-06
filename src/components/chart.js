import {Line} from "react-chartjs-2";
import React from "react";
import {GraphRadioButtons} from "./radioButtons"


// Takes Dates and days to create dynamic chart with correct number of data points
function RenderChart(props) {
    let currency = props.currency,
        dates = props.dates[props.currencyIndex[currency]];
    let chartData = {
        // Slice dates using number of days
        labels: Object.keys(dates).slice(props.maxDays - props.days, props.maxDays),
        datasets: [{
            label: '',
            data: Object.values(dates).slice(props.maxDays - props.days, props.maxDays),
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
            fontFamily:"Roboto",
            fontWeight:"bold"
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
        <div>
            <Line
                data={chartData}
                options={chartOptions}
            />
            <GraphRadioButtons onClick={(days)=>props.onClick(days)}/>
        </div>
    );
}

export default (RenderChart);