import { ChampionType } from "@/types/quizTypes"
import Champion from "./champion"
import { useQuizContext } from "@/context/quizContext";

export default function Table() {
    const [quizState, dispatch]: any = useQuizContext();
    const champions = quizState.guesses
    return (
        <div className="overflow-x-auto overflow-y-hidden max-w-4xl">
            <table className="w-full table-fixed border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="w-24 border-b-2">Gender</th>
                        <th className="w-24 border-b-2">Champion</th>
                        <th className="w-24 border-b-2">Position(s)</th>
                        <th className="w-24 border-b-2">Species</th>
                        <th className="w-24 border-b-2">Resource</th>
                        <th className="w-24 border-b-2">Range type</th>
                        <th className="w-24 border-b-2">Region(s)</th>
                        <th className="w-24 border-b-2">Release year</th>
                    </tr>
                </thead>
                <tbody id="champions">
                    {champions.map((champion: any) => (
                        <Champion key={champion.name} {...champion} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
