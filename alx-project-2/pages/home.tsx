import React from "react";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
      </main>
    </div>
  );
};

export default HomePage;

