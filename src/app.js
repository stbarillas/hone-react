import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './app.css';
import RenderTable from "./components/table";
import RenderChart from "./components/chart";
import Navbar from './components/navbar';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: 30,
            dates: {},
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
                this.setState({dates: priceDict});
            })
            // Displays error if API call is unsuccessful
            .catch((err) => {
                console.log("API fetch was unsuccessful");
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {/*Navbar section*/}
                <Navbar/>
                {/*Columns section*/}
                <div>
                    <Grid className="columns">
                        {/*Table column*/}
                        <Cell col={4}>
                            <RenderTable dates={this.state.dates} days={this.state.days}/>
                        </Cell>
                        {/*Graph column*/}
                        <Cell col={8}>
                            <RenderChart dates={this.state.dates} days={this.state.days}
                             onClick={(days) => this.setDays(days)}
                            />
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default(App);