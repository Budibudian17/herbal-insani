import { getBranchById } from '@/types/branch';
import { Users, Clock, Stethoscope, Wifi, UserRound, Calendar } from 'lucide-react';
import { theme } from '@/lib/theme';

export default function BranchDashboard({ params }: { params: { branch: string } }) {
  const branch = getBranchById(params.branch as any);

  if (!branch) {
    return <div>Cabang tidak ditemukan</div>;
  }

  return (
    <div className={`${theme.layout.container} ${theme.spacing.section}`}>
      <div className="mb-8">
        <h2 className={`${theme.text.heading} mb-2`}>
          Dashboard {branch.name}
        </h2>
        <p className={`${theme.text.body}`}>
          Selamat datang di sistem manajemen klinik {branch.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`${theme.cards.default} ${theme.spacing.card}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Pasien Hari Ini
            </h3>
            <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">0</p>
        </div>
        <div className={`${theme.cards.default} ${theme.spacing.card}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Antrean Aktif
            </h3>
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0</p>
        </div>
        <div className={`${theme.cards.default} ${theme.spacing.card}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dokter Tersedia
            </h3>
            <Stethoscope className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</p>
        </div>
        <div className={`${theme.cards.default} ${theme.spacing.card}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Status
            </h3>
            <Wifi className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-lg font-medium text-green-600 dark:text-green-400">
            Online
          </p>
        </div>
      </div>

      <div className={`${theme.cards.default} ${theme.spacing.card}`}>
        <h3 className={`${theme.text.subheading} mb-4`}>
          Menu Cepat
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={`/${branch.subdomain}/patients`}
            className={`${theme.colors.green[50]} rounded-lg p-4 ${theme.colors.green[100]} ${theme.animations.transition}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <UserRound className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Kelola Pasien
              </h4>
            </div>
            <p className={`${theme.text.body}`}>
              Data pasien dan rekam medis
            </p>
          </a>
          <a
            href={`/${branch.subdomain}/queue`}
            className={`${theme.colors.blue[50]} rounded-lg p-4 ${theme.colors.blue[100]} ${theme.animations.transition}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Kelola Antrean
              </h4>
            </div>
            <p className={`${theme.text.body}`}>
              Sistem nomor antrean
            </p>
          </a>
          <a
            href={`/${branch.subdomain}/doctors`}
            className={`${theme.colors.purple[50]} rounded-lg p-4 ${theme.colors.purple[100]} ${theme.animations.transition}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Stethoscope className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Kelola Dokter
              </h4>
            </div>
            <p className={`${theme.text.body}`}>
              Jadwal dan data dokter
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
