import { LucideIcon } from "lucide-react";

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


export interface NavigationProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

export interface StatCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    gradient: string;
    iconColor: string;
    valueColor?: string;
}
