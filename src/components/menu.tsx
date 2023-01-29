import { useQuizContext } from "@/context/quizContext";

export default function Menu() {
    const [quizState, dispatch]: any = useQuizContext();

    return (
        <div className="flex flex-col items-center mt-8 justify-center">
            <button onClick={() => dispatch({ type: "NEW_GAME" })} className="w-64 hover:bg-slate-800 my-2 outline outline-0 hover:outline-2 font-lilita-one rounded-full text-center p-4 text-2xl bg-slate-900 uppercase">Play Game</button>
            <button className="w-64 hover:bg-slate-800 my-2 outline outline-0 hover:outline-2 font-lilita-one rounded-full text-center p-4 text-2xl bg-slate-900 uppercase">How to Play</button>
            <button className="w-64 hover:bg-slate-800 my-2 outline outline-0 hover:outline-2 font-lilita-one rounded-full text-center p-4 text-2xl bg-slate-900 uppercase">About</button>
        </div>
    )
}
