import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  //useState
  const [hincha, setHincha] = useState("");
  const [club, setClub] = useState("");
  const [bandera, setBandera] = useState(false);

  //handlers
  const onChangeHincha = (e) => setHincha(e.target.value);
  const onChangeClub = (e) => setClub(e.target.value);

  const validandoHincha = (hincha) => {
    const sinEspacios = hincha.trim();

    if (sinEspacios.length < 3) {
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
      alert("“ERROR - Por favor chequea que la información sea correcta”");
    } else {
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
    </>
  );
}

export default App;
