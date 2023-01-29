import Game from "./game"
import Menu from "./menu"
import Winner from "./winner";
import { useQuizContext } from "../context/quizContext"
export default function Main() {

    const [quizState, dispatch]: any = useQuizContext();

    if (quizState.stage == "START") {
        return (
            <main className="w-full max-w-4xl flex flex-col" style={{minHeight: "80vh"}}>
                <Menu />
            </main>
        )
    } else if (quizState.stage == "PLAYING") {
        return (
            <main className="w-full max-w-4xl flex flex-col" style={{minHeight: "80vh"}}>
                <Game />
            </main>
        )
    } else if (quizState.stage == "END") {
        return (
            <main className="w-full max-w-4xl flex flex-col" style={{minHeight: "80vh"}}>
                <Winner />
            </main>
        )
    }
}