'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BranchConfig, BranchId } from '@/types/branch';

interface BranchContextType {
  branch: BranchConfig | null;
  setBranch: (branch: BranchConfig) => void;
  isLoading: boolean;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [branch, setBranchState] = useState<BranchConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect branch from URL or localStorage
    const detectBranch = () => {
      // Check localStorage first
      const savedBranch = localStorage.getItem('selectedBranch');
      if (savedBranch) {
        try {
          const parsedBranch = JSON.parse(savedBranch);
          setBranchState(parsedBranch);
          setIsLoading(false);
          return;
        } catch (error) {
          console.error('Failed to parse saved branch:', error);
        }
      }

      // Check URL subdomain or path
      const hostname = window.location.hostname;
      const subdomain = hostname.split('.')[0];
      
      // Import dynamically to avoid server-side issues
      import('@/types/branch').then(({ getBranchBySubdomain }) => {
        const detectedBranch = getBranchBySubdomain(subdomain);
        if (detectedBranch) {
          setBranchState(detectedBranch);
          localStorage.setItem('selectedBranch', JSON.stringify(detectedBranch));
        }
        setIsLoading(false);
      });
    };

    detectBranch();
  }, []);

  const setBranch = (newBranch: BranchConfig) => {
    setBranchState(newBranch);
    localStorage.setItem('selectedBranch', JSON.stringify(newBranch));
  };

  return (
    <BranchContext.Provider value={{ branch, setBranch, isLoading }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
}
