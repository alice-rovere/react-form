import { useState } from "react";

const codiciValidi = ["111", "222", "333", "444"];
const codiciNonValidi = ["555", "777", "888", "999"];
const codiceSuperSconto = ["000", "666"];
export default function Exer2() {
  const [codice, setCodice] = useState("");
  const [messaggio, setMessaggio] = useState("");
  function handleSetCodice(codice) {
    setCodice(codice);
    if (codiciValidi.includes(codice)) {
      setMessaggio("Sconto di 50 euro");
    } else if (codiciNonValidi.includes(codice)) {
      setMessaggio("Non hai sconti, mi dispiace");
    } else if (codiceSuperSconto.includes(codice)) {
      setMessaggio("Bravo, superscontissimo di 100 euro");
    } else {
      setMessaggio("");
    }
  }
  return (
    <div>
      <label className="form-label" htmlFor="codice">
        Inserisci 3 cifre uguali
      </label>
      <input
        onChange={(e) => handleSetCodice(e.target.value)}
        value={codice}
        className="form-control"
        id="codice"
        type="text"
      />
      <p>{messaggio}</p>
    </div>
  );
}
