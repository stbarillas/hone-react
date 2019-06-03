import React from 'react';
import {Layout, Header, Navigation, Grid, Cell, Radio, RadioGroup, DataTable, TableHeader,} from 'react-mdl'
import './app.css'
import {Line} from 'react-chartjs-2'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: 30,
            data: {},
        }

    }
    setDays(newVal) {
        this.setState({days: newVal})
    }

    componentDidMount() {
        // API call function
        fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
        // Converts API response to json
            .then( (response) => {
                return response.json();
            })
            // Calls render functions with bci object and days as parameters.
            .then((data) => {
                let priceDict = data["bpi"];
                this.setState({data: priceDict});
            })
            // Displays error if API call is unsuccessful
            .catch((err) => {
                console.log("API fetch was unsuccessful");
                console.log(err);
            })
    }

    renderTable(data, days) {
        let list = [],
            dates = Object.keys(data).reverse();
        for (let i = 0; i < days; i++) {
            let outputDict = {},
                date = dates[i],
                price = data[date];
            outputDict.date = date;
            outputDict.price = price;
            list.push(outputDict);
        }
        return (
            <DataTable shadow={0} rows={list} align={"center"}>
                <TableHeader name="date" tooltip="The amazing material name">Date</TableHeader>
                <TableHeader numeric name="price" tooltip="Price per unit">Price (USD)</TableHeader>
            </DataTable>
        )
    }

    renderChart(data, days) {
        let chartData = {
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
                // width={100}
                // height={50}
                options={chartOptions}
            />
        );
    }

    render() {
        return (
            <div>
                {/*Navbar section*/}
                <div className={'navbar has-depth'}>
                    <Layout>
                        <Header transparent title=
                            {<img src="http://honecap.com/wp-content/uploads/2017/03/HONE-LOGO.svg"
                                  alt="hone cap logo" style={{width: "200px", height: "49px"}}/>}
                        >
                            <Navigation>
                                <a className={"navbar-item"} href="https://github.com/stbarillas/hone-react">
                                    <span>Source Code</span>
                                </a>
                                <a className={"navbar-item"} href="http://stevebarillas.com/">
                                    <span>Portfolio</span>
                                </a>
                            </Navigation>
                        </Header>
                    </Layout>
                </div>
                {/*Radio button section*/}
                <div id={"radioContainer"}>
                    <RadioGroup name="demo" value="30">
                        <Radio className={"radioButtons"} value="30" onClick={() => this.setDays(30)}>30 Days</Radio>
                        <Radio className={"radioButtons"} value="15" onClick={() => this.setDays(15)}>15 Days</Radio>
                        <Radio className={"radioButtons"} value="7" onClick={() => this.setDays(7)}>7 Days</Radio>
                        <Radio className={"radioButtons"} value="3" onClick={() => this.setDays(3)}>3 Days</Radio>
                    </RadioGroup>
                </div>
                {/*Columns*/}
                <div>
                    <Grid className="columns">
                        <Cell col={4}>
                            {this.renderTable(this.state.data, this.state.days)}
                        </Cell>
                        <Cell col={8}>
                            {this.renderChart(this.state.data, this.state.days)}
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}


export default(App);