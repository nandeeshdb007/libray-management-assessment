import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/src/libs/utils';

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    icon: LucideIcon;
    iconBgGradient: string;
    iconColor: string;
    valueColor?: string;
    subtitleColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    subtitle,
    icon: Icon,
    iconBgGradient,
    iconColor,
    valueColor = 'text-slate-800',
    subtitleColor = 'text-green-600',
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">{title}</p>
                    <p className={cn('text-2xl sm:text-3xl font-bold mt-1', valueColor)}>{value}</p>
                    <p className={cn('text-xs mt-1', subtitleColor)}>{subtitle}</p>
                </div>
                <div className={cn('p-3 rounded-xl', iconBgGradient)}>
                    <Icon className={cn('w-5 h-5 sm:w-6 sm:h-6', iconColor)} />
                </div>
            </div>
        </div>
    );
};
