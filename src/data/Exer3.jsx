import { useState } from "react";

export default function Exer3() {
  const [voto, setVoto] = useState("");
  const [messaggio, setMessaggio] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (voto <= 2) {
      setMessaggio(
        "Ci dispiace molto. Ti saremo grati di raccontarci come migliorare.",
      );
    } else if (voto == 3) {
      setMessaggio(
        "Grazie per il tuo feedback: stiamo lavorando per migliorare.",
      );
    } else if (voto >= 4) {
      setMessaggio("Siamo felici che tu abbia apprezzato il servizio!");
    }
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="1"
          value="1"
          onChange={(e) => setVoto(e.target.value)}
        />
        <label className="form-label me-4" htmlFor="2">
          1
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="2"
          value="2"
          onChange={(e) => setVoto(e.target.value)}
        />
        <label className="form-label me-4" htmlFor="2">
          2
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="3"
          value="3"
          onChange={(e) => setVoto(e.target.value)}
        />
        <label className="form-label me-4" htmlFor="3">
          3
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="4"
          value="4"
          onChange={(e) => setVoto(e.target.value)}
        />
        <label className="form-label me-4" htmlFor="4">
          4
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="5"
          value="5"
          onChange={(e) => setVoto(e.target.value)}
        />
        <label className="form-label me-4" htmlFor="5">
          5
        </label>
        <textarea
          className="form-control"
          placeholder="Inserisci il tuo commento"
        ></textarea>
        <button className="btn btn-secondary my-2">Invia il tuo feed</button>
      </form>
      {messaggio && <p>{messaggio}</p>}
    </div>
  );
}
