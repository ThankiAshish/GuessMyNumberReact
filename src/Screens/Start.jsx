import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const startGame = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <div className="container col">
      <div className="card col startPage">
        <div className="card-header">
          <h3>Guess My Number</h3>
        </div>
        <div className="card-body">
          <ul>
            <li>
              Guess My Number is a simple guessing game built using React.
            </li>
            <li>
              If your guessed number is less than the correct number then
              program will display "Lower Than Correct Number!".
            </li>
            <li>
              If your guessed number is correct then the modal will pop-up
              displaying you "You Have Correctly Guessed the Number" with a Play
              Again Button.
            </li>
            <li>
              If your guessed number is greater than the correct number then
              program will display "Higher Than Correct Number!".
            </li>
          </ul>
          <button className="btn" type="button" onClick={startGame}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
