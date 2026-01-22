import Header from "@/src/components/common/header";
import NavigationTab from "@/src/components/common/navigation-tab";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <NavigationTab  />
    </div>
  );
}
