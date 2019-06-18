import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './app.css';
import RenderTable from "./components/table";
import RenderChart from "./components/chart";
import Navbar from './components/navbar';
import {currentDate, previousDate} from './tasks/dateFormat'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: 1095,
            dates: [],
            maxDays: 1095,
            currency: 'USD',
            currencyIndex: {'USD':0, 'EUR':1, 'GBP': 2}
        }
    }
    setDays(newVal) {
        this.setState({days: newVal})
    }
    setCurrency(newVal) {
        this.setState({currency: newVal})
    }

    componentDidMount() {
        this.apiCall()
    }

    apiCall(){
        const dateEnd = currentDate(),
            dateStart = previousDate(this.state.maxDays),
            currencies = ["USD", "EUR", "GBP"];
        // API call function
        for (let x in currencies) {
            fetch('https://api.coindesk.com/v1/bpi/historical/close.json' +
                '?currency='+ currencies[x] + '&start='+dateStart+'&end='+dateEnd)
            // Converts API response to json
                .then( (response) => {
                    return response.json();
                })
                // Calls render functions with bci object and days as parameters.
                .then((data) => {
                    let stateCopy = this.state.dates;
                    stateCopy.push(data['bpi']);
                    this.setState({dates: stateCopy});
                })
                // Displays error if API call is unsuccessful
                .catch((err) => {
                    console.log("API fetch was unsuccessful");
                    console.log(err);
                })
        }
    }

    updateData(currency){
        this.setCurrency(currency);
        // this.apiCall();
    }

    render() {

        if (this.state.dates.length){
            return (
                <div id={"appBody"}>
                    {/*Navbar section*/}
                    <Navbar/>
                    {/*Columns section*/}
                    <div>
                        <Grid className="columns">
                            {/*Table column*/}
                            <Cell col={4} className={'column'}>
                                {/*Pass dates and days to table component*/}
                                <RenderTable dates={this.state.dates} days={this.state.days}
                                             currency={this.state.currency} currencyIndex={this.state.currencyIndex}
                                             onClick={(currency) => this.updateData(currency)}
                                />
                            </Cell>
                            {/*Graph column*/}
                            <Cell col={8}>
                                {/*Pass dates and days to chart component*/}
                                <RenderChart dates={this.state.dates} days={this.state.days}
                                             currency={this.state.currency} currencyIndex={this.state.currencyIndex}
                                             onClick={(days) => this.setDays(days)} maxDays={this.state.maxDays}
                                />
                            </Cell>
                        </Grid>
                    </div>
                </div>
            );
        }
        else{
            return <div></div>
        }
    }
}

export default(App);