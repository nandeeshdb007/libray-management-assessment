import { IssueBookModalProps } from "@/src/types";
import { Modal } from "../ui/Modal";

export const IssueBookModal = ({
    isOpen,
    books,
    students,
    selectedBook,
    selectedStudent,
    onClose,
    onBookSelect,
    onStudentSelect,
    onConfirm
}: IssueBookModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Issue Book">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Select Book</label>
                    <select
                        value={selectedBook}
                        onChange={(e) => onBookSelect(e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Choose a book...</option>
                        {books.filter(b => b.availableCopies > 0).map(book => (
                            <option key={book.id} value={book.id}>{book.title} - {book.author}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Select Student</label>
                    <select
                        value={selectedStudent}
                        onChange={(e) => onStudentSelect(e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Choose a student...</option>
                        {students.filter(s => s.borrowedBooks.length < 3).map(student => (
                            <option key={student.id} value={student.id}>{student.name} ({student.department})</option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={onConfirm}
                    disabled={!selectedBook || !selectedStudent}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${selectedBook && selectedStudent
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                >
                    Confirm Issue
                </button>
            </div>
        </Modal>
    );
};