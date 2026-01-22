import Header from "../common/header";
import NavigationTab from "../common/NavigationTab";

const MainContent= () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <NavigationTab />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8"></main>
    </div>
  );
};

export default MainContent;

