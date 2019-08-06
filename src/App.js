import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import whiskey from './whiskey.jpg';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';
import './App.css';
import Navs from './Navs';
import DogList from './DogList';
import Dog from './Dog';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
      // {
      //   name: "Tubby",
      //   age: 4,
      //   src: tubby,
      //   facts: [
      //     "Tubby is not the brightest dog",
      //     "Tubby does not like walks or exercise.",
      //     "Tubby loves eating food."
      //   ]
      // }
    ]
  }
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  render() { 
    return ( 
      <div className='App'>
        <Navs names={this.props.dogs.map(dog => dog.name)}/>
        <Switch>
          <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>}/>
          <Route exact path='/dogs/:dogname' render={(routeProps) => <Dog {...routeProps} dogs={this.props.dogs}/>}/>
        </Switch>
      </div>
     );
  }
}
 
export default App;
