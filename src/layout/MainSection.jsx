import ExerciseCard from "../components/ExerciseCard";
import { exercises } from "../data/exercises";

export default function MainSection() {
  return (
    <div>
      {exercises.map((exercise) => (
        <div className="container" key={exercise.id}>
          <ExerciseCard exercise={exercise} />

          {/* <h2 className="text-muted">
            {exercise.id}.{exercise.titolo}
          </h2>
          <p>{exercise.descrizione}</p> */}
        </div>
      ))}
    </div>
  );
}
