import Exer1 from "../data/Exer1";
import Exer2 from "../data/Exer2";
import Exer3 from "../data/Exer3";
import Exer4 from "../data/Exer4";
import Exer5 from "../data/Exer5";
import Exer6 from "../data/Exer6";

const exerciseComponents = {
  1: Exer1,
  2: Exer2,
  3: Exer3,
  4: Exer4,
  5: Exer5,
  6: Exer6,
};

export default function ExerciseCard({ exercise }) {
  const ExerciseComponent = exerciseComponents[exercise.id];

  return (
    <div>
      <h2 className="text-muted">
        {exercise.id}.{exercise.titolo}
      </h2>
      <p>{exercise.descrizione}</p>
      <ExerciseComponent />
    </div>
  );
}
