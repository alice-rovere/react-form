import { useState } from "react";

const initialState = {
  nome: "",
  numero: "",
  data: "",
};
export default function Exer5() {
  const [fields, setFields] = useState(initialState);
  const [reservation, setReservation] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    setReservation(fields);
    setFields(initialState);
  }
  return (
    <div className="container ">
      <h4>Inserisci i tuoi dati </h4>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nome">
          Nome
        </label>
        <input
          value={fields.nome}
          onChange={(e) =>
            setFields((value) => ({
              ...value,
              nome: e.target.value,
            }))
          }
          className="form-control"
          id="nome"
          type="name"
        />
        <label className="form-label" htmlFor="numero">
          Numero commensali
        </label>
        <input
          value={fields.numero}
          onChange={(e) =>
            setFields((value) => ({
              ...value,
              numero: e.target.value,
            }))
          }
          className="form-control"
          id="numero"
          type="number"
        />
        <label className="form-label" htmlFor="data">
          Data
        </label>
        <input
          value={fields.data}
          onChange={(e) =>
            setFields((value) => ({
              ...value,
              data: e.target.value,
            }))
          }
          className="form-control mb-5"
          id="data"
          type="date"
        />
        <button className="btn btn-primary mb-2">Prenota</button>
      </form>
      {reservation && (
        <div className="card container text-center text-muted p-3">
          <h6 className="card-title">Ecco il riepilogo</h6>
          <p>{`Hai prenotato a nome: ${reservation.nome}, un tavolo per ${reservation.numero} persone, in data: ${reservation.data}.`}</p>
        </div>
      )}
    </div>
  );
}
