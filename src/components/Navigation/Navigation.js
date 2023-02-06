import React from 'react'
import { Component } from "react/cjs/react.production.min"
import { Root, Routes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './Header.css'
import './Menubar.css'

class Navigation extends Component {

    render() {
        return (
            <Root>
                {this.renderHeader()}
                <div className="content">
                    <React.Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        <Dynamic path="dynamic" />
                        <Routes path="*" />
                    </Router>
                    </React.Suspense>
            </div>
            </Root>
        );
    }

    renderHeader() {
        return (
            <nav id="header" class="header primary-bg">
                <Link className="logo" to="/">
                    <img style={{height: "2rem"}} src="/global-just-text.png" alt="Robogals Logo" />
                </Link>

                <ul className="menutab">
                    <li className="tab">
                        <span>Test</span>
                        <ul id="dropdown" className="menudrop sub">
                            <li>
                                <Link className="sub-heading" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="sub-heading" to="/executives">Exec Team</Link>
                            </li>
                            <li>
                                <Link className="sub-heading" to="/partners">Partners</Link>
                            </li>
                            <li>
                                <Link className="sub-heading" to="/dynamic">Dynamic</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;



