import React from 'react';
import {Layout, Header, Navigation, Grid, Cell, Radio, RadioGroup} from 'react-mdl'
import './app.css'
import RadioButtons from './components/radioButtons.js'
import Table from './components/table.js'
import Graph from './components/graph.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: 30,
        }
    }
    setDays(newVal) {
        this.setState({days: newVal,})
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
                {/*/!*Columns*!/*/}
                {/*<div>*/}
                {/*    <Grid className="columns">*/}
                {/*        <Cell col={4}>*/}
                {/*            <Table/>*/}
                {/*        </Cell>*/}
                {/*        <Cell col={8}>*/}
                {/*            <Graph/>*/}
                {/*        </Cell>*/}
                {/*    </Grid>*/}
                {/*</div>*/}
            </div>
        );
    }
}


export default(App);