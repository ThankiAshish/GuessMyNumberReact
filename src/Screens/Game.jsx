import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  borderRadius: "3px",
  boxShadow: 24,
  overflowY: "hidden",
  p: 3,
};

const Game = () => {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const generateRandomNumber = () => {
    setCorrectNumber(parseInt(Math.floor(Math.random() * 1000)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changingText = document.getElementById("changing-text");

    const guessedNumber = parseInt(
      document.getElementById("number-input").value
    );

    console.log("Correct: " + correctNumber);
    console.log("Guessed: " + guessedNumber);

    if (isNaN(guessedNumber)) {
      changingText.textContent = "Enter Something to Guess First!";
    }

    if (guessedNumber === correctNumber) {
      handleOpen();
      changingText.textContent = "Play Again!";
      setBtnState(true);
    } else if (guessedNumber < correctNumber)
      changingText.textContent = "Lower than Correct Number!";
    else if (guessedNumber > correctNumber)
      changingText.textContent = "Higher than Correct Number!";
  };

  useEffect(generateRandomNumber, []);

  return (
    <div className="container">
      <div className="backBtn-container">
        <ArrowBackIosIcon
          fontSize="10px"
          className="fixedBackBtn"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="card col">
        <div className="card-header">
          <h3>Guess My Number</h3>
          <p id="changing-text">Start Guessing....</p>
        </div>
        <div className="card-body">
          <input
            type="text"
            placeholder="Guess...."
            className="inputField"
            id="number-input"
            autoComplete="off"
          />
          {!btnState ? (
            <button
              type="button"
              className="btn"
              onClick={handleSubmit}
              id="checkBtn">
              Check
            </button>
          ) : null}
          {btnState ? (
            <button
              type="button"
              className="btn"
              onClick={() => navigate("/")}>
              Play Again
            </button>
          ) : null}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={style}
          padding="5px"
          height="100%"
          width="100%"
          className="modal-box">
          <div className="modal-header">
            <button
              className="btn btn-small"
              type="button"
              onClick={handleClose}>
              X
            </button>
          </div>
          <div className="modal-items-container">
            <h3>You Have Correctly Guessed the Number!</h3>
            <button
              className="btn"
              type="button"
              onClick={() => navigate("/")}>
              Play Again?
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Game;
