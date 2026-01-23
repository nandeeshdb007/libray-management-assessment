import { TransactionsTabProps } from "@/src/types";

export const TransactionsTab = ({ records, bookMap, studentMap, onReturnBook }: TransactionsTabProps) => {
    const sortedRecords = [...records].sort((a, b) => b.issueDate.getTime() - a.issueDate.getTime());

    return (
        <div className="space-y-4">
            {sortedRecords.map(record => {
                const book = bookMap.get(record.bookId);
                const student = studentMap.get(record.studentId);
                const isOverdue = record.status === 'overdue' || (record.status === 'issued' && new Date() > record.dueDate);
                const daysRemaining = Math.ceil((record.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

                return (
                    <div key={record.id} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${isOverdue && record.status !== 'returned' ? 'border-red-300 bg-red-50' :
                            record.status === 'returned' ? 'border-green-300' : 'border-slate-200'
                        }`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg">{book?.title}</h4>
                                        <p className="text-sm text-slate-600">by {book?.author}</p>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${record.status === 'returned' ? 'bg-green-100 text-green-700' :
                                            isOverdue ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {record.status === 'returned' ? 'Returned' : isOverdue ? 'Overdue' : 'Issued'}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Student</p>
                                        <p className="text-sm font-medium text-slate-800">{student?.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Issue Date</p>
                                        <p className="text-sm font-medium text-slate-800">
                                            {record.issueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Due Date</p>
                                        <p className="text-sm font-medium text-slate-800">
                                            {record.dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Status</p>
                                        {record.status === 'returned' ? (
                                            <p className="text-sm font-medium text-green-600">✓ Completed</p>
                                        ) : isOverdue ? (
                                            <p className="text-sm font-medium text-red-600">{Math.abs(daysRemaining)}d overdue</p>
                                        ) : (
                                            <p className="text-sm font-medium text-blue-600">{daysRemaining}d remaining</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {record.status !== 'returned' && (
                                <button
                                    onClick={() => onReturnBook(record.id)}
                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                                >
                                    Return Book
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};