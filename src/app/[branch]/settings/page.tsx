import { getBranchById } from '@/types/branch';

export default function SettingsPage({ params }: { params: { branch: string } }) {
  const branch = getBranchById(params.branch as any);

  if (!branch) {
    return <div>Cabang tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Pengaturan - {branch.name}
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Halaman pengaturan untuk cabang {branch.code}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Fitur akan diimplementasikan: Konfigurasi cabang, pengaturan notifikasi, manajemen user, dan pengaturan sistem
        </p>
      </div>
    </div>
  );
}
