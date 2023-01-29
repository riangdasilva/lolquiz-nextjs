import championsList from '../data/champions.json'
import { useQuizContext } from "@/context/quizContext"; 
 
export default function Input() {
    const [quizState, dispatch]: any = useQuizContext();

    function guessChampion() {
        const input = document.getElementById('champion') as HTMLInputElement
        const name = input.value
        const champion = championsList.find((champion) => champion.name.toUpperCase() === name.toUpperCase())
        if (champion == quizState.answer) {
            dispatch({type: "CORRECT"})
        } else {
            dispatch({type: "GUESS", payload: champion})
        }
    }

    return (
        <div className="mx-auto flex my-8">
            <input className="font-lilita-one mr-2 outline-none rounded-full placeholder-slate-600 text-center p-2 text-2xl bg-slate-900 uppercase" placeholder="Type here" type="text" name="" id="champion"></input>
            <button id="guess" onClick={guessChampion} className="font-lilita-one cursor-pointer hover:bg-cyan-800 outline outline-0 hover:outline-2 aspect-square w-16 rounded-full bg-cyan-900">Guess</button>
        </div>
    )
}
