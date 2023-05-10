import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Game from "@/components/game"
import Winner from "@/components/winner"
import Menu from "@/components/menu"

import { useQuizContext } from "../context/quizContext"

export default function Home() {

  const [quizState, dispatch]: any = useQuizContext();

  function getComponentByStage() {
    switch (quizState.stage) {
      case "GAME":
        return <Game />;
      case "WINNER":
        return <Winner />;
      default:
        return <Menu />;
    }
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Guess the Champion</title>
      </Head>
      <div className="flex flex-col items-center justify-between text-white min-h-screen bg-slate-800 p-2">
        <Header />
        <main>{getComponentByStage()}</main>
        <Footer />
      </div>
    </>

  );
}

//{
//  (() => {
//    switch (quizState.stage) {
//      case "GAME":
//        return <Game />;
//      case "WINNER":
//        return <Winner />;
//      default:
//        return <Menu />;
//    }
//  })()
//}