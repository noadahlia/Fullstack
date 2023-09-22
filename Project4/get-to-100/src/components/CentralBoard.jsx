import React, { Component } from "react";
import AllGamers from "./all_gamers";

class CentralBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamers: [],
    };
  }

  updateGamers = (updatedGamers) => {
    this.setState({ gamers: updatedGamers });
  };

  render() {
    const sortedGamers = this.state.gamers.slice().sort((a, b) => {
      //   console.log(a, b);
      if (a.score !== b.score) {
        return b.score - a.score; // Sort by score (higher is better)
      } else {
        return a.steps - b.steps; // If scores are equal, sort by steps (lower is better)
      }
    });

    const topGamers = sortedGamers.slice(0, 3); // Get the top 3 gamers

    return (
      <div>
        <AllGamers
          gamers={this.state.gamers}
          updateGamers={this.updateGamers}
        />
        <h2>Top Gamers</h2>
        <ul>
          {topGamers.map((gamer, index) => (
            <li key={gamer.id}>
              {index + 1}. {gamer.name} - Score: {gamer.score}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CentralBoard;
