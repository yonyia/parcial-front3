import React from "react";
import "./Card.css";
const Card = ({ hincha, club }) => {
  return (
    <>
      <h1>Hola {hincha}</h1>
      <h3>Bienvenido al club mais grande do mundo {club}</h3>
    </>
  );
};

export default Card;
