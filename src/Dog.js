import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let name = this.props.match.params.dogname;
        let hasDog = false;
        let dogsName ;
        this.props.dogs.forEach(dog => {
            if (dog.name.toLowerCase() === name){
                hasDog = true;
                dogsName = dog;
            }
        });

        return ( 
            <div className='Dog d-flex justify-content-center mt-5 '>
                {(hasDog) 
                    ?   <div className="card text-left shadow-lg" style={{width: '18rem'}}>
                            <img src={dogsName.src} className="card-img-top" alt="..."/>
                            <div className="card-body  ">
                                <h4 className="card-title mb-1">{`${dogsName.name}`}</h4>
                                <p className="card-text text-muted ">{dogsName.age} years old</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dogsName.facts.map((fact,i) => <li className="list-group-item" key={i}>{fact}</li>)}
                            </ul>
                            <div className="card-body ">
                                <button  className="btn btn-primary " onClick={() => this.props.history.push('/dogs')}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    :   <Redirect to='/dogs'/>
                }
            </div>
        );
    }
}
 
export default Dog;