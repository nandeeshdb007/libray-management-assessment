"use client";

import { TabType } from '@/src/types';
import { Header } from '../ui/Header';
import { useState } from 'react';
import { Navigation } from '../ui/NavigationTabs';


export default function Home() {
    const [tab, setTab] = useState<TabType>('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
       <Navigation activeTab={tab} onTabChange={setTab} />
    </div>
  );
}
