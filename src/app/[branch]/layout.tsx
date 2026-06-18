import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getBranchById, getAllBranches } from '@/types/branch';

export default function BranchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { branch: string };
}) {
  const branchId = params.branch as any;
  const branch = getBranchById(branchId);

  // Validate branch exists
  if (!branch) {
    const allBranches = getAllBranches();
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="border-b bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {branch.name}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {branch.address}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Cabang: {branch.code}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {branch.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
