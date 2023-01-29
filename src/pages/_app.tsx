import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QuizProvider } from '../context/quizContext'; // import based on where you put it

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  )
}
