import { BooksTabProps } from "@/src/types";
import { Search } from "lucide-react";

export const BooksTab = ({ books, search, category, categories, onSearchChange, onCategoryChange, onIssueClick }: BooksTabProps) => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <select
                        value={category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                        ))}
                    </select>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-slate-600">
                        Showing <span className="font-bold text-slate-800">{books.length}</span> books
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {books.map(book => (
                    <div key={book.id} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
                                    {book.category}
                                </span>
                                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${book.availableCopies > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {book.availableCopies > 0 ? '✓ Available' : 'Out'}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">{book.title}</h3>
                            <p className="text-sm text-slate-600 mb-1">by {book.author}</p>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                <span>ISBN: {book.isbn}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-slate-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-slate-500 mb-1">Total</p>
                                    <p className="text-lg font-bold text-slate-800">{book.totalCopies}</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-green-600 mb-1">Free</p>
                                    <p className="text-lg font-bold text-green-700">{book.availableCopies}</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-purple-600 mb-1">Issued</p>
                                    <p className="text-lg font-bold text-purple-700">{book.borrowCount}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => onIssueClick(book.id)}
                                disabled={book.availableCopies === 0}
                                className={`w-full py-3 rounded-xl font-semibold transition-all ${book.availableCopies > 0
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                                        : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                                    }`}
                            >
                                {book.availableCopies > 0 ? 'Issue Book' : 'Not Available'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};