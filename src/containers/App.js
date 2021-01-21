import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'tachyons';
import SearchBox from '../components/SearchBox.js';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';

class App extends Component{
  constructor(){ //what we need to change
    super()
    this.state = {
      searchfield: '',
      robots: []
    }
  }

  //where are we taking our resources from when COMPONENTMOUNTS
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//fetch always return a response,  wich has something inside, in this case users
    .then(users =>{this.setState({robots : users})});
  }

  onSearchChange = (letters) =>{
    this.setState({ searchfield : letters.target.value})//every time we write a letter(s) in the searchfield, it's state is setted
  }



  render(){
    //we need to filter all the robots that includes in their username the letters written in the searchfield
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter (robot =>{
      return robot.username.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length){
    return (
      <div className='tc'>
        <h1>robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <ErrorBoundry>
          <Scroll>
            <CardList robots = {filteredRobots}/>
         </Scroll>
        </ErrorBoundry>
      </div>
      );
    }else{
       return <h1 className='tc'>LOADING...</h1>
    }
  }
}

export default App;
