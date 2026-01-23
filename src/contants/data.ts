import { Book, BorrowRecord, Student, TabType } from "../types";
import { Book as BookIcon, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';


export const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: TrendingUp },
    { id: 'books' as TabType, label: 'Books', icon: BookIcon },
    { id: 'students' as TabType, label: 'Students', icon: Users },
    { id: 'transactions' as TabType, label: 'Transactions', icon: Calendar },
    { id: 'analytics' as TabType, label: 'Analytics', icon: BarChart3 }
];


export const books: Book[] = [
    { id: 'B001', title: 'Data Structures & Algorithms', author: 'Thomas Cormen', category: 'Computer Science', isbn: '978-0262033848', totalCopies: 5, availableCopies: 2, borrowCount: 45, publishYear: 2009 },
    { id: 'B002', title: 'Clean Code', author: 'Robert Martin', category: 'Programming', isbn: '978-0132350884', totalCopies: 4, availableCopies: 1, borrowCount: 38, publishYear: 2008 },
    { id: 'B003', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', category: 'Programming', isbn: '978-0135957059', totalCopies: 3, availableCopies: 0, borrowCount: 52, publishYear: 2019 },
    { id: 'B004', title: 'Introduction to Machine Learning', author: 'Ethem Alpaydin', category: 'AI/ML', isbn: '978-0262028189', totalCopies: 4, availableCopies: 3, borrowCount: 29, publishYear: 2014 },
    { id: 'B005', title: 'Database System Concepts', author: 'Abraham Silberschatz', category: 'Database', isbn: '978-0078022159', totalCopies: 5, availableCopies: 2, borrowCount: 41, publishYear: 2019 },
    { id: 'B006', title: 'Computer Networks', author: 'Andrew Tanenbaum', category: 'Networks', isbn: '978-0132126953', totalCopies: 4, availableCopies: 4, borrowCount: 22, publishYear: 2010 },
    { id: 'B007', title: 'Operating System Concepts', author: 'Abraham Silberschatz', category: 'Operating Systems', isbn: '978-1118063330', totalCopies: 5, availableCopies: 1, borrowCount: 48, publishYear: 2018 },
    { id: 'B008', title: 'Artificial Intelligence', author: 'Stuart Russell', category: 'AI/ML', isbn: '978-0136042594', totalCopies: 3, availableCopies: 2, borrowCount: 35, publishYear: 2020 },
];

export const students: Student[] = [
    { id: 'S001', name: 'Alice Johnson', email: 'alice@university.edu', department: 'Computer Science', borrowedBooks: ['B001', 'B005'], joinDate: new Date('2023-09-01') },
    { id: 'S002', name: 'Bob Smith', email: 'bob@university.edu', department: 'Information Technology', borrowedBooks: ['B002'], joinDate: new Date('2023-09-01') },
    { id: 'S003', name: 'Charlie Brown', email: 'charlie@university.edu', department: 'Computer Science', borrowedBooks: ['B003', 'B007'], joinDate: new Date('2023-08-15') },
    { id: 'S004', name: 'Diana Prince', email: 'diana@university.edu', department: 'Data Science', borrowedBooks: [], joinDate: new Date('2023-09-10') },
    { id: 'S005', name: 'Eve Wilson', email: 'eve@university.edu', department: 'Software Engineering', borrowedBooks: ['B008'], joinDate: new Date('2023-08-20') },
];

export const createRecords = (): BorrowRecord[] => {
    const today = new Date();
    return [
        { id: 'R001', bookId: 'B001', studentId: 'S001', issueDate: new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000), dueDate: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000), status: 'issued' },
        { id: 'R002', bookId: 'B005', studentId: 'S001', issueDate: new Date(today.getTime() - 16 * 24 * 60 * 60 * 1000), dueDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000), status: 'overdue' },
        { id: 'R003', bookId: 'B002', studentId: 'S002', issueDate: new Date(today.getTime() - 8 * 24 * 60 * 60 * 1000), dueDate: new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000), status: 'issued' },
        { id: 'R004', bookId: 'B003', studentId: 'S003', issueDate: new Date(today.getTime() - 12 * 24 * 60 * 60 * 1000), dueDate: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), status: 'issued' },
        { id: 'R005', bookId: 'B007', studentId: 'S003', issueDate: new Date(today.getTime() - 18 * 24 * 60 * 60 * 1000), dueDate: new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000), status: 'overdue' },
        { id: 'R006', bookId: 'B008', studentId: 'S005', issueDate: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000), dueDate: new Date(today.getTime() + 9 * 24 * 60 * 60 * 1000), status: 'issued' },
    ];
};
