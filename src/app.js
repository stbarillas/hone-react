import React from 'react';
import {Layout, Header, Navigation, Grid, Cell} from 'react-mdl'
import './app.css'

class App extends React.Component {
    render() {
        return (
            <div>
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