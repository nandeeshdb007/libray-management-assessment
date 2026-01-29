import { StudentsTabProps } from "@/src/types";
import { AlertCircle, CheckCircle } from "lucide-react";

export const StudentsTab = ({ students, overdueRecords, bookMap }: StudentsTabProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">ID</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Name</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Department</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Email</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Borrowed</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Status</th>
                    </tr>
                </thead>
                <tbody className="">
                    {students.map(student => {
                        const hasOverdue = overdueRecords.some(r => r.studentId === student.id);
                        return (
                            <tr key={student.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">{student.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                            {student.name.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium text-slate-800">{student.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">{student.department}</td>
                                <td className="px-6 py-4 text-sm text-slate-600">{student.email}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2">
                                        {student.borrowedBooks.length === 0 ? (
                                            <span className="text-xs text-slate-400 italic">None</span>
                                        ) : (
                                            student.borrowedBooks.map(id => {
                                                const book = bookMap.get(id);
                                                return (
                                                    <span key={id} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                                                        {book?.title}
                                                    </span>
                                                );
                                            })
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {hasOverdue ? (
                                        <span className="flex items-center text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                                            <AlertCircle className="w-3 h-3 mr-1" />
                                            Overdue
                                        </span>
                                    ) : student.borrowedBooks.length >= 3 ? (
                                        <span className="flex items-center text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                                            Max Limit
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                                            <CheckCircle className="w-3 h-3 mr-1" />
                                            Good
                                        </span>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};