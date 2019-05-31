import React from "react";
import Chart from 'chart.js';

class Graph extends React.Component {

    render() {
        return (
            <div>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        );
    }
}

function renderChart(data, days) {
    var ctx = document.getElementById('dataChart');
    var dataChart = new Chart(ctx, {
        type: 'line',
        data: {
            // Slice start calculated dynamically with days parameter
            labels: Object.keys(data).slice(31 - days, 31),
            datasets: [{
                label: '',
                data: Object.values(data).slice(31 - days, 31),
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
        },
        options: {
            title: {
                display: true,
                text: "Historical BTC Graph",
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
        }
    });
}

export default (Graph);