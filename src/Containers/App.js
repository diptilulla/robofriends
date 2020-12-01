import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
//import { robots } from './robots';we have to destructure since 'export' can have multiple exports like if apart from robots we had another variable cats then {robots , cats }
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
import './App.css';

class  App extends Component {
  constructor() {
    super()
    this.state = {           //for state to reside parent element should be a class &  state is in the parent component i.e. App which passes props to child components i.e. SearchBox & CardList
      robots: [],
      searchfield:''
    }
  }
  
  componentDidMount() {      //in-buit function so arrow format not needed
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users=> this.setState({robots:users}));
  }

  onSearchChange=(event)=>{    //method of class/object App to make value of this equal to App and not input(where we called the function hence this=input) we use arrow functions to make sure that 'this' is acc to where it was created
    this.setState({searchfield: event.target.value}); //setState in-built function to change state here value of object property searchfiel changed
  }

  render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
        return(
          <div className='tc'>
            <h1 className='white f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundary>
              <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        );
      }
  }
}

export default App;