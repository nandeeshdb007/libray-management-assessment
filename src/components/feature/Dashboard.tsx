"use client";

import { DashboardProps } from '@/src/types';
import { Book, CheckCircle, Calendar, AlertCircle, Plus, TrendingUp, Users } from 'lucide-react';
import { StatCard } from '../ui/StatsCard';



export const Dashboard = ({ analytics, overdueRecords, bookMap, studentMap, onIssueClick, onReturnBook }: DashboardProps) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard title="Total Books" value={analytics.totalBooks} icon={Book} gradient="bg-gradient-to-br from-blue-100 to-blue-200" iconColor="text-blue-600" />
                <StatCard title="Available" value={analytics.availableBooks} icon={CheckCircle} gradient="bg-gradient-to-br from-green-100 to-green-200" iconColor="text-green-600" valueColor="text-green-600" />
                <StatCard title="Issued" value={analytics.issuedBooks} icon={Calendar} gradient="bg-gradient-to-br from-amber-100 to-amber-200" iconColor="text-amber-600" valueColor="text-amber-600" />
                <StatCard title="Overdue" value={analytics.overdueCount} icon={AlertCircle} gradient="bg-gradient-to-br from-red-100 to-red-200" iconColor="text-red-600" valueColor="text-red-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
                    <button onClick={onIssueClick} className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Plus className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-blue-700">Issue New Book</span>
                        </div>
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        Overdue Books
                        {analytics.overdueCount > 0 && (
                            <span className="ml-auto bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                {analytics.overdueCount}
                            </span>
                        )}
                    </h3>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                        {overdueRecords.length === 0 ? (
                            <div className="text-center py-8">
                                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                                <p className="text-slate-500 text-sm">No overdue books! 🎉</p>
                            </div>
                        ) : (
                            overdueRecords.map(r => {
                                const book = bookMap.get(r.bookId);
                                const student = studentMap.get(r.studentId);
                                const daysOverdue = Math.floor((new Date().getTime() - r.dueDate.getTime()) / (1000 * 60 * 60 * 24));
                                return (
                                    <div key={r.id} className="p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <p className="font-semibold text-slate-800 text-sm">{book?.title}</p>
                                                <p className="text-xs text-slate-600 mt-1">{student?.name}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="text-xs font-bold text-red-700 bg-red-200 px-2.5 py-1 rounded-full">
                                                    {daysOverdue}d late
                                                </span>
                                                <button onClick={() => onReturnBook(r.id)} className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                                                    Return
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                    Top Borrowed Books
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {analytics.topBooks.map((book, i) => (
                        <div key={book.id} className="relative p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border hover:shadow-md transition-all">
                            <div className="absolute -top-2 -left-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                {i + 1}
                            </div>
                            <div className="mt-2">
                                <p className="font-semibold text-slate-800 text-sm line-clamp-2 mb-2">{book.title}</p>
                                <p className="text-xs text-slate-600 mb-3">{book.author}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-purple-600 font-bold bg-purple-100 px-2 py-1 rounded-full">
                                        {book.borrowCount} times
                                    </span>
                                    <span className={`text-xs font-medium ${book.availableCopies > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {book.availableCopies > 0 ? '✓' : 'Out'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}