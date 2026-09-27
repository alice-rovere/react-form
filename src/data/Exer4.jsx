import { useState } from "react";

const tariffaOraria = 30;

export default function Exer4() {
  const [hours, setHours] = useState("");
  const [messaggio, setMessaggio] = useState("");

  function handleSetTotal(oreInput) {
    setHours(oreInput);
    const ore = Number(oreInput);
    const totale = tariffaOraria * ore + (ore > 8 ? 50 : 0);

    setMessaggio(
      ore > 8
        ? `Il totale è di ${totale} euro, 50 euro extra per aver superato la soglia di 8 ore.`
        : `Il totale è di ${totale} euro`,
    );
  }
  return (
    <div className="container">
      <label className="form-label" htmlFor="hours">
        Quante ore di lavoro ?
      </label>
      <input
        onChange={(e) => handleSetTotal(e.target.value)}
        value={hours}
        className="form-control"
        id="hours"
        type="number"
      />

      <p className="text-center my-3">{messaggio}</p>
    </div>
  );
}
