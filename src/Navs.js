import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navs.css';

class Navs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Nav'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/dogs">Dog Shelter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">                    
                            {this.props.names.map(dog => {
                                return  <li className='nav-item'>
                                            <NavLink exact 
                                                activeClassName='Navbar-active' 
                                                to={`/dogs/${dog.toLowerCase()}`}
                                                className='nav-link'
                                                key={dog}
                                                >
                                                {dog}
                                            </NavLink>
                                        </li>
                            })}
                        </ul>                       
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navs;