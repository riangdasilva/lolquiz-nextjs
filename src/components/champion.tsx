import { ChampionType } from "@/types/quizTypes"
import { translatedNames } from "@/data/translate"
import { useQuizContext } from "@/context/quizContext"
import Table from "./table";

const BASE_URL: string = "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"

export default function Champion(champion: any) {
    const [quizState, dispatch]: any = useQuizContext();

    function getChampionImage(name: string): string {
        if (translatedNames.hasOwnProperty(name)) {
            name = translatedNames[name]
        }
        return `${BASE_URL + name}.png`
    }

    function getClassName(key: string): string {
        let className: string = "w-full aspect-square mx-auto flex flex-row justify-center items-center"
        if (key == "position" || key == "species" || key == "resource" || key == "region") {
            let correct: number = 0
            for (let i = 0; i < champion[key].length; i++) {
                if (quizState.answer[key].includes(champion[key][i])) {
                    correct++
                }
            }
            if (correct == champion[key].length) {
                className += " bg-green-900"
            } else if (correct > 0) {
                className += " bg-yellow-900"
            } else {
                className += " bg-slate-900"
            }
        } else {
            if (quizState.answer[key] == champion[key]) {
                className += " bg-green-900"
            } else {
                className += " bg-slate-900"
            }
        }

        return className
    }

    return (
        <tr>
            <td><div className="w-full aspect-square bg-slate-900 mx-auto flex flex-row justify-center items-center"><img src={getChampionImage(champion.name)} alt={champion.name} /></div></td>
            <td><div className={getClassName("gender")}><p className="text-center">{champion.gender}</p></div></td>
            <td><div className={getClassName("position")}><p className="text-center">{champion.position.join(", ")}</p></div></td>
            <td><div className={getClassName("species")}><p className="text-center">{champion.species.join(", ")}</p></div></td>
            <td><div className={getClassName("resource")}><p className="text-center">{champion.resource.join(", ")}</p></div></td>
            <td><div className={getClassName("rangetype")}><p className="text-center">{champion.rangetype}</p></div></td>
            <td><div className={getClassName("region")}><p className="text-center">{champion.region.join(", ")}</p></div></td>
            <td><div className={getClassName("release")}><p className="text-center">{champion.release}</p></div></td>
        </tr>
    )
}