"use client";

import { tabs } from '@/src/contants/data';
import { NavigationProps } from '@/src/types';


export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
    return (
        <nav className="bg-white border-b sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-6 flex gap-2">
                {tabs.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => onTabChange(id)}
                        className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-all ${activeTab === id ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-slate-600 hover:text-slate-800'
                            }`}
                    >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};
