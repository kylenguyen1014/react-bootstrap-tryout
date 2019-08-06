import React, { Component } from 'react';
import './DogList.css';

class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick(name) {
        this.props.history.push(`/dogs/${name}`);
    }
    render() { 
        return ( 
            <div className='DogList '>
                <h1 className='display-2 text-info'>Click on a dog</h1>
                <div className='container d-flex justify-content-center '>
                    <div className='row  '>
                        {this.props.dogs.map(dog => {
                            return (
                                <div className='DogList-dog col-lg-4 col-sm-12 '
                                    key={dog.name}
                                    onClick={() => this.handleClick(dog.name.toLowerCase())}
                                    >
                                    <img className='m-3 m-lg-4' alt={dog.name} src={dog.src}/>
                                    <h3>{dog.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DogList;