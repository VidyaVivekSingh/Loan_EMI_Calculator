import React from 'react'
import DrawerToggleButton from '../ToggleButton/ToggleButton'

import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
                <a href="#">LOAN EMI CALCULATOR</a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="#">Register</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar