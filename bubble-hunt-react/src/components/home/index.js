import React from "react";
import { withRouter } from 'react-router-dom';

const Home = props => {
    const openGame = () => props.history.push('/aim-game')
    return (
        <section
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div className="tab" id={"aim"} >
        <h2 id={"aim"}> Aim Game</h2>
        <p> Hint : you need to pop all the bubbles appears </p>
        <img
          className="appImage"
          src={
            "https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/target-512.png"
          }
          alt={"aim game"}
          id={"aim"}
          onClick={openGame}
        />
      </div>
    
      </section>
      
    )
}

export default withRouter(Home);

