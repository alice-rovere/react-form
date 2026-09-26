import { useState } from "react";
const initialState = {
  nome: "",
  cognome: "",
  citta: "",
};
export default function Exer1() {
  const [campi, setCampi] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // function handleSetCampi(e) {
  //   const { value, nome } = e.target;
  //   setCampi((actual) => ({
  //     ...actual,
  //     [nome]: value,
  //   }));
  // }
  function handleSubmit(e) {
    e.preventDefault;
    setCampi(initialState);
    alert("dati salvati");
    setIsSubmitted(true);
  }
  return (
    <div className="container">
      {isSubmitted || (
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="nome">
            Nome
          </label>
          <input
            value={campi.nome}
            onChange={(e) =>
              setCampi((prevCampi) => ({
                ...prevCampi,
                nome: e.target.value,
              }))
            }
            className="form-control"
            id="nome"
          />
          <label className="form-label" htmlFor="cognome">
            Cognome
          </label>
          <input
            value={campi.cognome}
            onChange={(e) =>
              setCampi((prevCampi) => ({
                ...prevCampi,
                cognome: e.target.value,
              }))
            }
            className="form-control"
            id="cognome"
          />
          <label className="form-label" htmlFor="citta">
            Città
          </label>
          <input
            value={campi.citta}
            onChange={(e) =>
              setCampi((prevCampi) => ({
                ...prevCampi,
                citta: e.target.value,
              }))
            }
            className="form-control mb-4"
            id="citta"
          />

          <button className="btn btn-primary mb-4">Invia i dati</button>
        </form>
      )}
    </div>
  );
}
