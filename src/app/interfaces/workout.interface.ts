export interface IWorkout {
  workoutId: number;
  title: string;
  description: string;
  bgImg: string;
  exercises: Array<IExercise>;
}

export interface IExercise {
  exerciseId: number;
  exerciseName: string;
  duration: string;
  // workouts: Array<IWorkout>
}
