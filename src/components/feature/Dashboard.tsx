"use client";

import React from 'react';
import {
    Book,
    CheckCircle,
    Calendar,
    AlertCircle,
} from 'lucide-react';
import { useLibraryContext } from '@/src/context/LibraryContext';
import { StatCard } from '../common/StatsCard';


export const Dashboard = () => {
    const {
        books,
        analytics,
    } = useLibraryContext();

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard
                    title="Total Books"
                    value={analytics.totalBooks}
                    subtitle={`+${books.length} titles`}
                    icon={Book}
                    iconBgGradient="bg-gradient-to-br from-blue-100 to-blue-200"
                    iconColor="text-blue-600"
                />
                <StatCard
                    title="Available"
                    value={analytics.availableBooks}
                    subtitle={`${Math.round((analytics.availableBooks / analytics.totalBooks) * 100)}% free`}
                    icon={CheckCircle}
                    iconBgGradient="bg-gradient-to-br from-green-100 to-green-200"
                    iconColor="text-green-600"
                    valueColor="text-green-600"
                    subtitleColor="text-slate-600"
                />
                <StatCard
                    title="Issued"
                    value={analytics.issuedBooks}
                    subtitle={`${analytics.dueSoonCount} due soon`}
                    icon={Calendar}
                    iconBgGradient="bg-gradient-to-br from-amber-100 to-amber-200"
                    iconColor="text-amber-600"
                    valueColor="text-amber-600"
                    subtitleColor="text-amber-600"
                />
                <StatCard
                    title="Overdue"
                    value={analytics.overdueCount}
                    subtitle="Needs attention"
                    icon={AlertCircle}
                    iconBgGradient="bg-gradient-to-br from-red-100 to-red-200"
                    iconColor="text-red-600"
                    valueColor="text-red-600"
                    subtitleColor="text-red-600"
                />
            </div>

        </div>
    );
};
