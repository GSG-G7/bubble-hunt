import React, { Component } from 'react';
import Canvas from '../canvas';
import { app, database } from '../base';

import './style.css';

const units = 10;
export default class AimGame extends Component {
  state = {
    start: false,
    bubbles: [],
    score: 0,
    lives: 5,
  };

  t = null;

  secondsPassed = 0;

  delay = 2000;

  resetDelay = () => {
    this.delay = 2000;
  };

  decDelay = () => {
    setTimeout(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed < 37) {
        this.delay -= 50;
        this.decDelay();
      }
    }, 1000);
  };

  generateRandomCoordinates = () => {
    const random = () => Math.floor(Math.random() * units);
    return [random(), random()];
  };

  showBubble = () => {
    const newCoor = this.generateRandomCoordinates();
    const { bubbles } = this.state;
    if (bubbles.length === units * units) {
      return this.endGame();
    }
    const i = bubbles.find(([first, second]) => {
      const [newFirst, newSecond] = newCoor;
      return newFirst === first && newSecond === second;
    });
    if (!i) {
      this.setState(({ bubbles: bubbles2 }) => ({
        bubbles: [...bubbles2, newCoor],
      }));
      this.t = setTimeout(this.showBubble, this.delay);
    } else {
      this.showBubble();
    }
    return null;
  };

  incScore = id => {
    this.setState(({ score }) => ({ score: score + 100 }));
    this.hideBubble(id);
    this.setBestScore();
  };

  decScore = () => {
    const { lives, start } = this.state;
    if (lives === 1) this.endGame();
    if (start) {
      this.setState(prevState => ({
        score: prevState.score - 80,
        lives: prevState.lives - 1,
      }));
    }
  };

  hideBubble = id => {
    const [first, second] = id.toString().split('');
    const coor = [+first, +second];
    const newBubbles = this.state.bubbles.filter(([first, second]) => {
      const [newFirst, newSecond] = coor;
      return !(newFirst === first && newSecond === second);
    });
    this.setState({ bubbles: newBubbles });
  };

  startGame = () => {
    this.resetDelay();
    this.decDelay();
    this.setState({ start: true, score: 0 });
    this.t = setTimeout(this.showBubble, 500);
  };

  endGame = () => {
    const { score } = this.state; 
    clearTimeout(this.t);
    // // save record in local storage ...
    this.setState({ start: false, bubbles: [], lives: 0 });
    const { currentUser : { uid } } = this.props;
    database.collection('users').doc(uid).update({
      score
    })
  };

  setBestScore = () => {
    if (this.getBestScore() < this.state.score)
      setTimeout(() => localStorage.setItem('bestScore', JSON.stringify(this.state.score)), 0);
  };

  getBestScore = () => {
    const bestScore = localStorage.getItem('bestScore');
    return bestScore ? JSON.parse(bestScore) : '0';
  };

  render() {
    const { bubbles, start, score, lives } = this.state;
    const { history : { push } } = this.props;
    return (
      <div className="game-container">
        <h3 onClick={start ? this.endGame : this.startGame} className="start-end-text">
          {start ? 'End' : 'Start'}
        </h3>
        <h3>
          your score is : {score} lives: {lives} best score :{this.getBestScore()}
        </h3>
        <p>
          see the heighes score for all plyers 
          <small onClick={() => push('/stats')} role="button" tabIndex="-1" onKeyDown={() => {}} className="small">
            click here ..
          </small>
        </p>
        <Canvas
          units={units}
          bubbles={bubbles}
          bubbleOnClick={this.incScore}
          canvasOnClick={this.decScore}
        />
      </div>
    );
  }
}
