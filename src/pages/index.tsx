import Head from "next/head";
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-white font-sans p-2 h-full">
      <Head>
        <title>Guess the Champion</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
