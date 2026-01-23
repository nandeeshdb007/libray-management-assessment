import { TabType } from "../types";
import { Book, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';


export const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: TrendingUp },
    { id: 'books' as TabType, label: 'Books', icon: Book },
    { id: 'students' as TabType, label: 'Students', icon: Users },
    { id: 'transactions' as TabType, label: 'Transactions', icon: Calendar },
    { id: 'analytics' as TabType, label: 'Analytics', icon: BarChart3 }
];