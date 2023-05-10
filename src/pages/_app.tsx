import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'
import { QuizProvider } from '../context/quizContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  )
}
