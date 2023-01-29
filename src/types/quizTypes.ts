export type QuizState = {
    stage: string
    guesses: ChampionType[] | []
    answer: ChampionType | {}
}

export type ChampionType = {
    name: string
    release: string
    role: [string]
    position: [string]
    resource: string
    rangetype: string
    adaptivetype: string
    cost: string
}