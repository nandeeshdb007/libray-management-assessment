"use client";

import useHome from "@/src/hooks/useHome";

import { useLibrary } from "@/src/hooks/useLibrary";
import { Dashboard } from "../feature/Dashboard";
import { Header } from "../layout/Header";
import { Navigation } from "../layout/NavigationTabs";
import { StudentsTab } from "../feature/StudentTab";

export default function Home() {
  const { tab, setTab, handleIssueClick } = useHome();
  const {
    bookMap,
    studentMap,
    overdueRecords,
    analytics,
    returnBook,
    students,
  } = useLibrary();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Navigation activeTab={tab} onTabChange={setTab} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {tab === "dashboard" && (
          <Dashboard
            analytics={analytics}
            overdueRecords={overdueRecords}
            bookMap={bookMap}
            studentMap={studentMap}
            onIssueClick={() => handleIssueClick()}
            onReturnBook={returnBook}
          />
        )}
                {tab === 'students' && (
          <StudentsTab
            students={students}
            overdueRecords={overdueRecords}
            bookMap={bookMap}
          />
        )}
      </main>
    </div>
  );
}
