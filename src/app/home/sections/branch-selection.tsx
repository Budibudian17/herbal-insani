'use client';

import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { getAllBranches } from '@/types/branch';
import { theme } from '@/lib/theme';

export function BranchSelectionSection() {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const branches = getAllBranches();

  const handleBranchSelect = (branchId: string) => {
    setSelectedBranch(branchId);
    localStorage.setItem('selectedBranch', branchId);
    const branch = branches.find(b => b.id === branchId);
    if (branch) {
      window.location.href = `/${branch.subdomain}`;
    }
  };

  return (
    <section className={`${theme.layout.container} ${theme.spacing.section}`}>
      <div className="mb-8">
        <h2 className={`${theme.text.subheading} mb-4`}>
          Pilih Cabang
        </h2>
        <p className={`${theme.text.body} mb-6`}>
          Silakan pilih cabang untuk melanjutkan ke sistem manajemen klinik
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => handleBranchSelect(branch.id)}
            className={`${theme.cards.default} ${theme.cards.hover} ${theme.spacing.card} ${theme.buttons.outline} group`}
          >
            <div className="mb-3 flex justify-center">
              <Building2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${theme.animations.groupHover} ${theme.animations.transition}`}>
              {branch.name}
            </h3>
            <p className={`${theme.text.body} mb-3`}>
              {branch.address}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
              <span className="font-medium">{branch.code}</span>
              <span>{branch.phone}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex flex-wrap gap-2 justify-center">
                {branch.features.onlineRegistration && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                    Online
                  </span>
                )}
                {branch.features.whatsappNotification && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    WhatsApp
                  </span>
                )}
                {branch.features.smartTV && (
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                    Smart TV
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
