import { createContext, useContext, useReducer } from 'react';
import { ChampionType, QuizState } from '../types/quizTypes';
import championsList from '../data/champions.json'

const STAGES = ["MENU", "GAME", "WINNER"]

const initialState: QuizState = {
    stage: STAGES[0],
    guesses: [],
    answer: {}
}

function getRandomChampion(champions: any): ChampionType {
    const randomIndex = Math.floor(Math.random() * champions.length);
    return champions[randomIndex];
}

function quizReducer(state: QuizState, action: any): QuizState {
    switch (action.type) {
        case 'NEW_GAME':
            return {
                stage: STAGES[1],
                guesses: [],
                answer: getRandomChampion(championsList)
            };
        case 'GUESS':
            return {
                ...state,
                guesses: [...state.guesses, action.payload]
            };
        case 'CORRECT':
            return {
                ...state,
                stage: STAGES[2]
            };
        default:
            return state;
    }
}


const QuizContext = createContext(initialState);

export function QuizProvider({ children }: { children: React.ReactNode }) {
    const value: any = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuizContext() {
    return useContext(QuizContext);
}