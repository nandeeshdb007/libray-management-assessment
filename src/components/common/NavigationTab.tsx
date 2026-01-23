"use client";
import { NavigationData } from "@/src/common/contants";
import useLibrary from "@/src/hooks/useLibrary";

const NavigationTab = () => {
  const { activeTab, setActiveTab } = useLibrary();
  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto scrollbar-hide">
          {NavigationData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-4 font-medium transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationTab;
