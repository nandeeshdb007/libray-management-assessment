import { Book, BorrowRecord, Student } from "../types";

export const initialBooks: Book[] = [
    { id: 'B001', title: 'Data Structures & Algorithms', author: 'Thomas Cormen', category: 'Computer Science', isbn: '978-0262033848', totalCopies: 5, availableCopies: 2, borrowCount: 45, publishYear: 2009 },
    { id: 'B002', title: 'Clean Code', author: 'Robert Martin', category: 'Programming', isbn: '978-0132350884', totalCopies: 4, availableCopies: 1, borrowCount: 38, publishYear: 2008 },
    { id: 'B003', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', category: 'Programming', isbn: '978-0135957059', totalCopies: 3, availableCopies: 0, borrowCount: 52, publishYear: 2019 },
    { id: 'B004', title: 'Introduction to Machine Learning', author: 'Ethem Alpaydin', category: 'AI/ML', isbn: '978-0262028189', totalCopies: 4, availableCopies: 3, borrowCount: 29, publishYear: 2014 },
    { id: 'B005', title: 'Database System Concepts', author: 'Abraham Silberschatz', category: 'Database', isbn: '978-0078022159', totalCopies: 5, availableCopies: 2, borrowCount: 41, publishYear: 2019 },
    { id: 'B006', title: 'Computer Networks', author: 'Andrew Tanenbaum', category: 'Networks', isbn: '978-0132126953', totalCopies: 4, availableCopies: 4, borrowCount: 22, publishYear: 2010 },
    { id: 'B007', title: 'Operating System Concepts', author: 'Abraham Silberschatz', category: 'Operating Systems', isbn: '978-1118063330', totalCopies: 5, availableCopies: 1, borrowCount: 48, publishYear: 2018 },
    { id: 'B008', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', category: 'AI/ML', isbn: '978-0136042594', totalCopies: 3, availableCopies: 2, borrowCount: 35, publishYear: 2020 },
    { id: 'B009', title: 'Design Patterns', author: 'Erich Gamma', category: 'Programming', isbn: '978-0201633612', totalCopies: 3, availableCopies: 1, borrowCount: 31, publishYear: 1994 },
    { id: 'B010', title: 'Introduction to Algorithms', author: 'Thomas Cormen', category: 'Computer Science', isbn: '978-0262033848', totalCopies: 6, availableCopies: 3, borrowCount: 56, publishYear: 2009 },
];

export const initialStudents: Student[] = [
    { id: 'S001', name: 'Alice Johnson', email: 'alice@university.edu', department: 'Computer Science', borrowedBooks: ['B001', 'B005'], joinDate: new Date('2023-09-01') },
    { id: 'S002', name: 'Bob Smith', email: 'bob@university.edu', department: 'Information Technology', borrowedBooks: ['B002'], joinDate: new Date('2023-09-01') },
    { id: 'S003', name: 'Charlie Brown', email: 'charlie@university.edu', department: 'Computer Science', borrowedBooks: ['B003', 'B007'], joinDate: new Date('2023-08-15') },
    { id: 'S004', name: 'Diana Prince', email: 'diana@university.edu', department: 'Data Science', borrowedBooks: [], joinDate: new Date('2023-09-10') },
    { id: 'S005', name: 'Eve Wilson', email: 'eve@university.edu', department: 'Software Engineering', borrowedBooks: ['B008'], joinDate: new Date('2023-08-20') },
    { id: 'S006', name: 'Frank Miller', email: 'frank@university.edu', department: 'Computer Science', borrowedBooks: ['B009'], joinDate: new Date('2023-09-05') },
    { id: 'S007', name: 'Grace Lee', email: 'grace@university.edu', department: 'Information Technology', borrowedBooks: [], joinDate: new Date('2023-09-12') },
];

export const createBorrowRecords = (): BorrowRecord[] => {
    const records: BorrowRecord[] = [];
    const today = new Date();

    const recordData = [
        { id: 'R001', bookId: 'B001', studentId: 'S001', daysAgo: 10, dueDays: 4, status: 'issued' as const },
        { id: 'R002', bookId: 'B005', studentId: 'S001', daysAgo: 16, dueDays: -2, status: 'overdue' as const },
        { id: 'R003', bookId: 'B002', studentId: 'S002', daysAgo: 8, dueDays: 6, status: 'issued' as const },
        { id: 'R004', bookId: 'B003', studentId: 'S003', daysAgo: 12, dueDays: 2, status: 'issued' as const },
        { id: 'R005', bookId: 'B007', studentId: 'S003', daysAgo: 18, dueDays: -4, status: 'overdue' as const },
        { id: 'R006', bookId: 'B008', studentId: 'S005', daysAgo: 5, dueDays: 9, status: 'issued' as const },
        { id: 'R007', bookId: 'B009', studentId: 'S006', daysAgo: 3, dueDays: 11, status: 'issued' as const },
    ];

    recordData.forEach(({ id, bookId, studentId, daysAgo, dueDays, status }) => {
        records.push({
            id,
            bookId,
            studentId,
            issueDate: new Date(today.getTime() - daysAgo * 24 * 60 * 60 * 1000),
            dueDate: new Date(today.getTime() + dueDays * 24 * 60 * 60 * 1000),
            status
        });
    });

    return records;
};
