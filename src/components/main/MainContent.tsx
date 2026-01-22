import Header from "../common/header";
import { Navigation } from "lucide-react";

const MainContent= () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8"></main>
    </div>
  );
};

export default MainContent;

