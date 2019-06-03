import React from 'react';
import {Layout, Header, Navigation, Grid, Cell} from 'react-mdl'
import './app.css'
import RenderTable from "./components/table"
import RenderChart from "./components/chart"
import RadioButtons from "./components/radioButtons"


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
                    {/*Assigns props.onclick to a function that takes parameter "days" from components and calls
                     method setDays while injection "days"*/}
                <RadioButtons onClick={(days) => this.setDays(days)}/>
                {/*Columns*/}
                <div>
                    <Grid className="columns">
                        <Cell col={4}>
                            <RenderTable dates={this.state.dates} days={this.state.days}/>
                        </Cell>
                        <Cell col={8}>
                            <RenderChart dates={this.state.dates} days={this.state.days}/>
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default(App);