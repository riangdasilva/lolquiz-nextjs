export const translate: Record<string, string> = {
    "Aurelion Sol": "AurelionSol",
    "Renata Glasc": "Renata",
    "Miss Fortune": "MissFortune",
    "Master Yi": "MasterYi",
    "Lee Sin": "LeeSin",
    "K'Sante": "KSante",
    "Nunu & Willump": "Nunu",
    "Kai'Sa": "Kaisa",
    "Kha'Zix": "Khazix",
    "Rek'Sai": "RekSai",
    "Bel'Veth": "Beltveth",
    "Tahm Kench": "TahmKench",
    "Twisted Fate": "TwistedFate",
    "Wukong": "MonkeyKing",
    "Xin Zhao": "XinZhao",
    "LeBlanc": "Leblanc",
    "Vel'Koz": "Velkoz",
    "Cho'Gath": "Chogath",
    "Dr. Mundo": "DrMundo",
    "Jarvan IV": "JarvanIV",
    "Kog'Maw": "KogMaw"
}

const LOL_VERSION: string = "13.1.1";
const BASE_URL: string = `https://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/img/champion/`;

export function getChampionIcon(championName: string): string {
    if (translate.hasOwnProperty(championName)) {
        return `${BASE_URL + translate[championName]}.png`;
    }
    return `${BASE_URL + championName}.png`;
}