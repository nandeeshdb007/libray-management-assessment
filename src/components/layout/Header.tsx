"use client";

import { Book } from 'lucide-react';

export const Header = () => {
    return (
        <header className="bg-white shadow-lg border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl">
                        <Book className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            LibraryHub
                        </h1>
                        <p className="text-xs text-slate-500">Modern Library Management</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
            </div>
        </header>
    );
};
