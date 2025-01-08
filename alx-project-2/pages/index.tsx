import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-center">
          Welcome to ALX Project 2!
        </h1>
      </main>
    </div>
  );
}
