import championsList from "../data/champions.json";
import { useQuizContext } from "@/context/quizContext";
import { useState } from "react";

export default function Input() {
  const [quizState, dispatch]: any = useQuizContext();
  const [error, setError] = useState("");

  function guessChampion() {
    const input = document.getElementById("champion") as HTMLInputElement;
    const name = input.value.toUpperCase();
    if (!name) {
      setError("Insira um nome de algum campeão!");
      return;
    }
    const champion = championsList.find(
      (champion) => champion.name.toUpperCase() === name
    );
    if (!champion) {
      setError(`"${name}" não existe! Tente novamente.`);

      return;
    }
    setError("");
    if (champion == quizState.answer) {
      dispatch({ type: "CORRECT" });
    } else {
      dispatch({ type: "GUESS", payload: champion });
    }
  }

  return (
    <div className="mx-auto flex my-8 items-center flex-col">
      <div>
        <input
          className="font-lilita-one mr-2 outline-none rounded-full placeholder-slate-600 text-center p-2 text-2xl bg-slate-900 uppercase"
          placeholder="Type here"
          type="text"
          name=""
          id="champion"
        ></input>
        <button
          id="guess"
          onClick={guessChampion}
          className="font-lilita-one cursor-pointer hover:bg-cyan-800 outline outline-0 hover:outline-2 aspect-square w-16 rounded-full bg-cyan-900"
        >
          Guess
        </button>
      </div>
      <p className="font-lilita-one text-xl mt-2">{error}</p>
    </div>
  );
}
