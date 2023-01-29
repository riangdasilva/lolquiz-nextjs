import Game from "./game"
import Menu from "./menu"
import Winner from "./winner";
import { useQuizContext } from "../context/quizContext"
export default function Main() {

    const [quizState, dispatch]: any = useQuizContext();

    function getStage() {
        if (quizState.stage == "START") {
            return <Menu />
        } else if (quizState.stage == "PLAYING") {
            return <Game />
        } else if (quizState.stage == "END") {
            return <Winner />
        }
    }

    return (
        <main className="w-full max-w-4xl flex flex-col" style={{ minHeight: "80vh" }}>
            {getStage()}
        </main>
    )
}