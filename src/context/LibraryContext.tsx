"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { LibraryContextType } from '../types';

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <LibraryContext.Provider value={undefined}>
            {children}
        </LibraryContext.Provider>
    );
};

export const useLibraryContext = (): LibraryContextType => {
    const context = useContext(LibraryContext);
    if (context === undefined) {
        throw new Error('useLibraryContext must be used within a LibraryProvider');
    }
    return context;
};
