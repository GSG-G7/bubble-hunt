import React from 'react';
import './style.css';

const Home = ({ history: { push } }) => {
  const openGame = () => push('/aim-game');
  const handleSignup = () => push('/sign-up');
  const handleStat = () => push('/stat');
  return (
    <section
      style={{
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="tab" id="aim">
        <h2 id="aim"> Aim Game</h2>
        <p> Hint : you need to pop all the bubbles appears </p>
        <div
          className="appImage"
          onClick={openGame}
          onKeyDown={() => {}}
          role="button"
          tabIndex="-1"
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/target-512.png"
            alt="aim game"
            id="aim"
          />
        </div>
        <p>
          Join us as a new player!{' '}
          <small onClick={handleSignup} role="button" tabIndex="-1" onKeyDown={() => {}}>
            click here ..
          </small>
        </p>
        <p>
          Watch the highest stats for players{' '}
          <small onClick={handleStat} role="button" tabIndex="-1" onKeyDown={() => {}}>
            click here ..
          </small>
        </p>
      </div>
    </section>
  );
};

export default Home;
