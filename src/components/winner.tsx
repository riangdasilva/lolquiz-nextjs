import { useQuizContext } from "@/context/quizContext";
import { getChampionIcon } from "@/lib/utils";

export default function Winner() {
    const [quizState, dispatch]: any = useQuizContext();
    return (
        <div className="font-lilita-one flex flex-col items-center justify-center text-center">
            <p className="text-3xl uppercase">You won!</p>
            <p className="text-2xl">The answer was:</p>
            <img src={getChampionIcon(quizState.answer.name)} alt={quizState.answer.name} className="w-32 h-32" />
            <p className="text-3xl uppercase">{quizState.answer.name}</p>
            <button onClick={() => dispatch({ type: "NEW_GAME" })} className="w-64 hover:bg-slate-800 outline outline-0 hover:outline-2 font-lilita-one rounded-full text-center p-4 text-2xl bg-slate-900 uppercase">Play Again</button>
        </div>
    )
}
