import React, { Component } from 'react';
import axios from 'axios';

import Avatar from './components/Avatar.js';
import Intro from './components/Intro.js';
import Repos from './components/Repos.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: {},
      repos: [],
      errors: [],
    };
  }
  componentWillMount = () => {
    const myURL = `https://api.github.com/users/ctrlaltpat`;
    axios.get(myURL)
      .then(res => {
        this.setState({ me: res.data })
        const reposURL = this.state.me.repos_url || null;
        if (reposURL !== null) {
          axios.get(reposURL)
            .then(res => {
              this.setState({ repos: res.data })
            }).catch( error => {
              this.setState({errors:[...this.state.errors, `Sorry, apparently my repos aren't avaliable at the moment.`]});
            })
        } else {
          this.setState({errors:[...this.state.errors, `Sorry, apparently my repos aren't avaliable at the moment.`]});
        }
      }).catch( error => {
        this.setState({errors:[...this.state.errors, `Sorry, apparently my github profile isn't avaliable at the moment.`]});
      })
  };
  render() {
    const moi = this.state.me;
    const repos = this.state.repos;
    return (
      <div id="main">
        <Avatar src={moi.avatar_url} alt={moi.login}/>
        <Intro moi={moi}/>
        <Repos repos={repos} />
      </div>
    )
  }
}

export default App;


