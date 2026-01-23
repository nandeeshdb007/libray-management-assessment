"use client";
import NavigationTab from "../common/NavigationTab";
import useLibrary from "@/src/hooks/useLibrary";
import { Dashboard } from "../feature/Dashboard";
import Header from "../common/Header";
const MainContent= () => {
  const { activeTab } = useLibrary();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <NavigationTab />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
         {activeTab === 'dashboard' && <Dashboard />}
      </main>
    </div>
  );
};

export default MainContent;

