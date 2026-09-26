import { exercises } from "../data/exercises";

export default function MainSection() {
  return (
    <div>
      {exercises.map((exercise) => (
        <div className="container">
          <h2 className="text-muted" key={exercise.id}>
            {exercise.id}.{exercise.titolo}
          </h2>
          <p>{exercise.descrizione}</p>
        </div>
      ))}
    </div>
  );
}
