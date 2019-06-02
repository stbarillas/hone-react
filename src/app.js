import React from 'react';
import {Layout, Header, Navigation, Grid, Cell, Radio, RadioGroup, DataTable, TableHeader,} from 'react-mdl'
import './app.css'

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
            dates = Object.keys(data);
        for (let i = 1; i <= days; i++) {
            let outputDict = {},
                date = dates[i],
                price = data[date];
            outputDict.date = date;
            outputDict.price = price;
            list.push(outputDict);
        }
        return (
            <DataTable shadow={0} rows={list}>
                <TableHeader name="date" tooltip="The amazing material name">Date</TableHeader>
                <TableHeader numeric name="price" tooltip="Price per unit">Price</TableHeader>
            </DataTable>
        )
    }

    render() {
        return (
            <div>
                {/*Navbar section*/}
                <div className={'navbar has-depth'}>
                    <Layout>
                        <Header transparent title="Logo Goes Here">
                            <Navigation>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                            </Navigation>
                        </Header>
                    </Layout>
                </div>
                {/*Radio button section*/}
                <div>
                    <RadioGroup name="demo" value="30">
                        <Radio value="30" onClick={() => this.setDays(30)}>30 Days</Radio>
                        <Radio value="15" onClick={() => this.setDays(15)}>15 Days</Radio>
                        <Radio value="7" onClick={() => this.setDays(7)}>7 Days</Radio>
                        <Radio value="3" onClick={() => this.setDays(3)}>3 Days</Radio>
                    </RadioGroup>
                </div>
                {/*Columns*/}
                <div>
                    <Grid className="columns">
                        <Cell col={4}>
                            {this.renderTable(this.state.data, this.state.days)}
                        </Cell>
                        <Cell col={8}>

                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}





export default(App);