import React, { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  //useState
  const [hincha, setHincha] = useState("");
  const [club, setClub] = useState("");
  const [bandera, setBandera] = useState(false);
  const [error, setError] = useState(false);

  //handlers
  const onChangeHincha = (e) => setHincha(e.target.value);
  const onChangeClub = (e) => setClub(e.target.value);

  const validandoHincha = (hincha) => {
    const sinEspacios = hincha.trim();
    const valHincha = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";

    if (sinEspacios.length < 3 && !hincha.match(valHincha)) {
      return false;
    } else {
      return true;
    }
  };

  const validandoClub = (club) => {
    const sinEspacios = club.trim();

    if (sinEspacios.length < 6) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isHinchaValido = validandoHincha(hincha);
    const isClubValido = validandoClub(club);

    if (!isHinchaValido || !isClubValido) {
      setError(true);
      alert("Ingrese un nombre y un club con al menos 2 numeros");
    } else {
      setError(false);
      setBandera(true);
    }
  };

  return (
    <>
      <h1>Futbol de primera</h1>
      <div className="container-formulario">
        <h2>Ingrese su nombre y club favorito</h2>

        <form action="" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="Nombre del hincha"
            value={hincha}
            onChange={onChangeHincha}
          />

          <input
            type="text"
            value={club}
            placeholder="club favorito"
            onChange={onChangeClub}
          />
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      {bandera && (
        <div className="container-card">
          <Card hincha={hincha} club={club} />
        </div>
      )}

      {error && (
        <div className="container-card">
          <h1>UPS! Error</h1>
          <p>No ha ingresado los datos correctamente</p>
          <p>Vuelva a intentarlo</p>
        </div>
      )}
    </>
  );
};

export default Formulario;
