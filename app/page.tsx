import Header from "@/components/Header";
import Tested from "@/components/Tested";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg border-1 rounded-2xl border-red-500 p-4">
      <Header/>
      <Tested/>
    </main>
  );
}
