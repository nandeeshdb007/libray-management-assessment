"use client";

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    gradient: string;
    iconColor: string;
    valueColor?: string;
}

export const StatCard = ({ title, value, icon: Icon, gradient, iconColor, valueColor = 'text-slate-800' }: StatCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-500 font-medium">{title}</p>
                    <p className={`text-3xl font-bold mt-1 ${valueColor}`}>{value}</p>
                </div>
                <div className={`${gradient} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
            </div>
        </div>
    );
};
