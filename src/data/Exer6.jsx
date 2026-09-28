import { useState } from "react";

export default function Exer6() {
  const [fields, setFields] = useState({
    nome: "",
    numero: "",
  });
  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFields((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati inviati");
    setContacts((prevContacts) => [...prevContacts, fields]);
    setFields({ nome: "", numero: "" });
  };
  const handleDelete = (contactToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((_, index) => index !== contactToDelete),
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nominativo">
          Nome
        </label>
        <input
          value={fields.nome}
          onChange={handleChange}
          name="nome"
          className="form-control"
          type="text"
          id="nominativo"
        />
        <label className="form-label" htmlFor="numero">
          Numero
        </label>
        <input
          value={fields.numero}
          onChange={handleChange}
          name="numero"
          className="form-control"
          type="number"
          id="numero"
        />
        <button className="btn btn-primary my-3">Aggiungi numero</button>
      </form>

      <div className="container">
        <ul>
          {contacts.map((contact, index) => (
            <li className="text-capitalize" key={index}>
              {contact.nome}: {contact.numero}{" "}
              <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => handleDelete(index)}
              >
                Cancella
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
