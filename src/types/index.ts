export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    isbn: string;
    totalCopies: number;
    availableCopies: number;
    borrowCount: number;
    publishYear: number;
}

export interface Student {
    id: string;
    name: string;
    email: string;
    department: string;
    borrowedBooks: string[];
    joinDate: Date;
}

export interface BorrowRecord {
    id: string;
    bookId: string;
    studentId: string;
    issueDate: Date;
    dueDate: Date;
    returnDate?: Date;
    status: 'issued' | 'returned' | 'overdue';
}

export type TabType = 'dashboard' | 'books' | 'students' | 'transactions' | 'analytics';

export type FilterStatusType = 'all' | 'issued' | 'returned' | 'overdue';

export interface Analytics {
    totalBooks: number;
    availableBooks: number;
    issuedBooks: number;
    totalStudents: number;
    overdueCount: number;
    dueSoonCount: number;
    topBorrowedBooks: Book[];
    categoryCounts: Map<string, number>;
    monthlyIssues: Map<string, number>;
}


export interface LibraryContextType {
    books: Book[];
    students: Student[];
    borrowRecords: BorrowRecord[];
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    analytics: Analytics;
}