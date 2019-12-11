import React, { Component } from 'react';
import { app, database } from '../base';

import './style.css'

class Stats extends Component {
  state = { 
    stats: [],
   }
  componentDidMount(){
    const stats = []
    database.collection('users').get().then(data => {
      data.forEach((doc) => stats.push(doc.data()))
    }).then(() => this.setState({stats}))  
  }

  render() {
    const {history: { push } } = this.props;
    const {stats} = this.state; 
    return (
      <div>
        <button onClick={() => push('/aim-game')}>go to game </button>
        <button onClick={() => push('/home')}>home </button>
      {stats.length ? stats.map(user => <h1 key={user.email}>{user.email}</h1>) : <h1>losddddding...</h1>}
      </div>
    )
  }
}
 
export default Stats;
