"use client";

import useHome from "@/src/hooks/useHome";

import { useLibrary } from "@/src/hooks/useLibrary";
import { Dashboard } from "../feature/Dashboard";
import { Header } from "../layout/Header";
import { Navigation } from "../layout/NavigationTabs";
import { StudentsTab } from "../feature/StudentTab";
import { TransactionsTab } from "../feature/TransactionTab";
import { BooksTab } from "../feature/BooksTab";
import { AnalyticsTab } from "../feature/AnalyticsTab";
import { IssueBookModal } from "../feature/IssueModal";

export default function Home() {
  const {
    tab,
    setTab,
    handleIssueClick,
    modal,
    selectedBook,
    handleCloseModal,
    handleConfirmIssue,
    selectedStudent,
    setSelectedBook,
    setSelectedStudent,
  } = useHome();

  const {
    bookMap,
    studentMap,
    overdueRecords,
    analytics,
    returnBook,
    students,
    records,
    books,
    categories,
    filteredBooks,
    setSearch,
    setCategory,
    search,
    category,
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
        {tab === "students" && (
          <StudentsTab
            students={students}
            overdueRecords={overdueRecords}
            bookMap={bookMap}
          />
        )}
        {tab === "transactions" && (
          <TransactionsTab
            records={records}
            bookMap={bookMap}
            studentMap={studentMap}
            onReturnBook={returnBook}
          />
        )}
        {tab === "books" && (
          <BooksTab
            books={filteredBooks}
            search={search}
            category={category}
            categories={categories}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            onIssueClick={handleIssueClick}
          />
        )}
        {tab === "analytics" && (
          <AnalyticsTab analytics={analytics} studentsCount={students.length} />
        )}
      </main>
      <IssueBookModal
        isOpen={modal}
        books={books}
        students={students}
        selectedBook={selectedBook}
        selectedStudent={selectedStudent}
        onClose={handleCloseModal}
        onBookSelect={setSelectedBook}
        onStudentSelect={setSelectedStudent}
        onConfirm={handleConfirmIssue}
      />
    </div>
  );
}
