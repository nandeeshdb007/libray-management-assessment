import { AnalyticsTabProps } from "@/src/types";
import { Book, Users, BarChart3 } from 'lucide-react';


export const AnalyticsTab = ({ analytics, studentsCount }: AnalyticsTabProps) => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    Category Distribution
                </h3>
                <div className="space-y-4">
                    {Array.from(analytics.categories.entries()).sort((a, b) => b[1] - a[1]).map(([cat, count]) => {
                        const percentage = (count / analytics.issuedBooks) * 100;
                        return (
                            <div key={cat}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-slate-700">{cat}</span>
                                    <span className="text-sm font-bold text-slate-800">{count} books ({percentage.toFixed(1)}%)</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-3">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Utilization Rate</h3>
                    <div className="flex items-center justify-center py-8">
                        <div className="text-center">
                            <p className="text-5xl font-bold text-slate-800">{Math.round((analytics.issuedBooks / analytics.totalBooks) * 100)}%</p>
                            <p className="text-sm text-slate-500 mt-2">Books in use</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                            <Book className="w-8 h-8 text-blue-600 mr-3" />
                            <div>
                                <p className="text-sm text-slate-600">Total Books</p>
                                <p className="text-xl font-bold text-slate-800">{analytics.totalBooks}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                            <Users className="w-8 h-8 text-purple-600 mr-3" />
                            <div>
                                <p className="text-sm text-slate-600">Active Students</p>
                                <p className="text-xl font-bold text-slate-800">{studentsCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};