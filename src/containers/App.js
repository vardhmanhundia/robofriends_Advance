import React, { Component } from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispact) => {
  return {
    onSearchChange: (event) => dispact(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}
//connect is higher order function which makes work another function
export default connect(mapStateToProps, mapDispatchToProps)(App);