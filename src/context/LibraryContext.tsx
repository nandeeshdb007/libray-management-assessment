"use client";

import React, { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { LibraryContextType, Book, Student, BorrowRecord, TabType, Analytics } from '../types';

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [books] = useState<Book[]>([]);
    const [students] = useState<Student[]>([]);
    const [borrowRecords] = useState<BorrowRecord[]>([]);
    const [activeTab, setActiveTab] = useState<TabType>('dashboard');

    const analytics: Analytics = useMemo(() => {
        const totalBooks = books.reduce((acc, b) => acc + (b.totalCopies || 0), 0);
        const availableBooks = books.reduce((acc, b) => acc + (b.availableCopies || 0), 0);
        const issuedBooks = Math.max(0, totalBooks - availableBooks);
        const totalStudents = students.length;
        const overdueCount = borrowRecords.filter(r => r.status === 'overdue').length;
        const dueSoonCount = borrowRecords.filter(r => {
            if (!r.returnDate) {
                const due = new Date(r.dueDate);
                const now = new Date();
                const diffDays = (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
                return diffDays > 0 && diffDays <= 7;
            }
            return false;
        }).length;
        const topBorrowedBooks: Book[] = [];
        const categoryCounts = new Map<string, number>();
        books.forEach(b => {
            categoryCounts.set(b.category, (categoryCounts.get(b.category) || 0) + 1);
        });
        const monthlyIssues = new Map<string, number>();
        borrowRecords.forEach(r => {
            const m = new Date(r.issueDate).toISOString().slice(0, 7);
            monthlyIssues.set(m, (monthlyIssues.get(m) || 0) + 1);
        });

        return {
            totalBooks,
            availableBooks,
            issuedBooks,
            totalStudents,
            overdueCount,
            dueSoonCount,
            topBorrowedBooks,
            categoryCounts,
            monthlyIssues,
        };
    }, [books, students, borrowRecords]);

    const value: LibraryContextType = {
        books,
        students,
        borrowRecords,
        activeTab,
        setActiveTab,
        analytics,
    };

    return (
        <LibraryContext.Provider value={value}>
            {children}
        </LibraryContext.Provider>
    );
};

export const useLibraryContext = (): LibraryContextType => {
    const context = useContext(LibraryContext);
    if (context === undefined) {
        throw new Error('useLibraryContext must be used within a LibraryProvider');
    }
    return context;
};
