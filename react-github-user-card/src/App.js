import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/mchrupcala')
     .then(res => 
      this.setState({users: res.data})
      )
    .catch(err => console.log(err)); 
  }


  componentDidUpdate() {
    axios
    .get('https://api.github.com/users/mchrupcala/followers')
     .then(res => 
      // console.log(res.data)
      this.setState({followers: res.data})
      )
    .catch(err => console.log(err))
  }

render() {
  return (
    <div className="App">
      <UserList 
      users={this.state.users}
      followers={this.state.followers}/>
      {/* {console.log(this.state.users)} */}
    </div>
  );

  }
}

export default App;
