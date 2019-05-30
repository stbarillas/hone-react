import React from 'react';
import {Layout, Header, Navigation, Grid, Cell} from 'react-mdl'
import './app.css'
import RadioButtons from './components/radioButtons.js'

class App extends React.Component {
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
                    <RadioButtons />
                </div>
                {/*Columns*/}
                <div>
                    <Grid className="columns">
                        <Cell col={4}>4</Cell>
                        <Cell col={8}>8</Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default(App);