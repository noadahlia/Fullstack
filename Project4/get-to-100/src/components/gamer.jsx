import React, { Component } from "react";
import "./gamer.css";

class Gamer extends Component {
  constructor(props) {
    super(props);

    const rand = 1 + Math.floor(Math.random() * 99);

    this.state = {
      enabled: props.enabled,
      randomNum: rand,
      name: props.name,
      currentNum: rand,
      steps: 0,
      scores: "-",
      newGame: "No",
      startNewGame: "dont",
      goNext: props.goNext,
      score: 0,
      gamers: this.props.gamers,
    };
    this.quit = this.quit.bind(this);
    this.changeEnabledInFather = this.changeEnabledInFather.bind(this);
    this.startNewGameUpdateButtons = this.startNewGameUpdateButtons.bind(this);
    this.deleteThisGamer = this.deleteThisGamer.bind(this);
  }
  //change the value of enabled from no to yes
  changeEnabledInFather = () => {
    const { changeEnabled } = this.props;
    changeEnabled();
  };

  startNewGameUpdateButtons = () => {
    const { gamerStartNewGame } = this.props;
    gamerStartNewGame();
  };
  deleteThisGamer = () => {
    const { deleteGamer } = this.props;
    deleteGamer();
  };

  static getDerivedStateFromProps(props, state) {
    //if the player want to start a new game this func will refresh the number etc.
    if (state.startNewGame == "Yes") {
      props.gamerStartNewGame();
      const rand = 1 + Math.floor(Math.random() * 99);
      return {
        steps: 0,
        //enabled: "Yes",
        randomNum: rand,
        currentNum: rand,
        startNewGame: "dont",
        //the buttons of start new game/ quit will disappear
        newGame: "No",
      };
    }
    if (state.newGame == "Yes") {
      return { newGame: "Yes" };
    }

    return { enabled: state.enabled };
  }

  gotThe100 = () => {
    //when getting the 100 number
    if (this.state.currentNum == 100) {
      var score = this.state.scores === "-" ? "" : this.state.scores + ", ";

      // console.log(this.props.gamers);
      const updatedGamers = this.props.gamers.map((gamer) => {
        if (gamer.id === this.props.id) {
          return {
            ...gamer,
            score: gamer.score + 1,
          };
        }

        return gamer;
      });
      console.log(this.state.score);
      this.setState(
        (prevState) => ({
          scores: score + prevState.steps,
          score: prevState.score + 1,
          gamers: updatedGamers,
        }),
        () => {
          console.log(this.state.score);
          this.props.updateGamers(updatedGamers);
        }
      );

      //the buttons of start new game/ quit will show up

      this.setState({ newGame: "Yes" });

      this.startNewGameUpdateButtons();
    } else {
      this.changeEnabledInFather();
    }
  };

  calculateNum = (operator) => {
    let curNum = this.state.currentNum;
    this.setState({ steps: this.state.steps + 1 });

    switch (operator) {
      case "*2":
        this.setState(
          {
            currentNum: this.state.currentNum * 2,
          },
          () => {
            this.gotThe100();
          }
        );
        curNum *= 2;
        break;
      case ":2":
        this.setState(
          { currentNum: Math.floor(this.state.currentNum / 2) },
          () => {
            this.gotThe100();
          }
        );
        curNum = Math.floor(curNum / 2);

        break;
      case "+1":
        this.setState({ currentNum: this.state.currentNum + 1 }, () => {
          this.gotThe100();
        });
        curNum += 1;

        break;
      case "-1":
        this.setState({ currentNum: this.state.currentNum - 1 }, () => {
          this.gotThe100();
        });
        curNum -= 1;

        break;

      default:
        break;
    }
  };

  newGame = () => {
    this.setState({ startNewGame: "Yes" });
    this.setState({ newGame: "No" });
  };

  quit = () => {
    this.deleteThisGamer();
  };

  render() {
    let className =
      this.props.enabled == "Yes" && this.props.goNext
        ? "yesButton"
        : "noButton";

    let newGame = this.state.newGame == "No" ? "noButton" : "yesButton";
    return (
      <div>
        <h3>ENABLED? {this.props.enabled}</h3>
        <h3>Name: {this.state.name}</h3>
        <h3>Current number: {this.state.currentNum}</h3>
        <h4>Steps: {this.state.steps}</h4>
        <h4>Started random number: {this.state.randomNum}</h4>
        <h3>SCORES: {this.state.scores}</h3>
        <button
          className={className}
          type="button"
          onClick={() => this.calculateNum("*2")}
        >
          *2
        </button>
        <button
          className={className}
          type="button"
          onClick={() => this.calculateNum(":2")}
        >
          :2
        </button>
        <button
          className={className}
          type="button"
          onClick={() => this.calculateNum("+1")}
        >
          +1
        </button>
        <button
          className={className}
          type="button"
          onClick={() => this.calculateNum("-1")}
        >
          -1
        </button>
        <br />
        <button
          className={newGame}
          type="button"
          onClick={() => this.newGame()}
        >
          New Game
        </button>
        <button className={newGame} type="button" onClick={() => this.quit()}>
          Quit
        </button>
      </div>
    );
  }
}

export default Gamer;
