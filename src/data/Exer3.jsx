export default function Exer3() {
  return (
    <div className="text-center">
      <form>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="2"
        />
        <label className="form-label me-4" htmlFor="2">
          1
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="2"
        />
        <label className="form-label me-4" htmlFor="2">
          2
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="3"
        />
        <label className="form-label me-4" htmlFor="3">
          3
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="4"
        />
        <label className="form-label me-4" htmlFor="4">
          4
        </label>
        <input
          type="radio"
          className="form-check-input me-1"
          name="voto"
          id="5"
        />
        <label className="form-label me-4" htmlFor="5">
          5
        </label>
        <textarea
          className="form-control"
          placeholder="Inserisci il tuo commento "
        ></textarea>
        <button className="btn btn-secondary my-2">Invia il tuo feed</button>
      </form>
    </div>
  );
}
