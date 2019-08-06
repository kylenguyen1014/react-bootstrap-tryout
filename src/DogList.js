import React, { Component } from 'react';
import './DogList.css';

class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='DogList container d-flex justify-content-center '>
                <div className='row  '>
                    {this.props.dogs.map(dog => {
                        return (
                            <div className='DogList-dog col-lg-4 col-sm-12 '>
                                <img className='m-3 m-lg-4' alt={dog.name} src={dog.src}/>
                                <h3>{dog.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
 
export default DogList;