import {Header, Layout, Navigation} from "react-mdl";
import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <div className={'navbar has-depth'}>
            <Layout>
                <Header className={"is-vertically-centered"} transparent title=
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
    );
}

export default (Navbar)