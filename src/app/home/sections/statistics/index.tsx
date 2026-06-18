'use client';

import { Users, UserCheck, Building2 } from 'lucide-react';
import { statisticsStyles } from './styles';
import { getAllBranches } from '@/types/branch';

export function StatisticsSection() {
  const branches = getAllBranches();
  const branchCount = branches.length;

  return (
    <section className={statisticsStyles.section.container}>
      <div className={statisticsStyles.container.wrapper}>
        <div className={statisticsStyles.container.content}>
          <div className={statisticsStyles.stats.container}>
            <div className={statisticsStyles.stats.item}>
              <Users className={statisticsStyles.stats.icon} />
              <div className={statisticsStyles.stats.number}>
                500+
              </div>
              <div className={statisticsStyles.stats.label}>
                Klien Puas
              </div>
            </div>

            <div className={statisticsStyles.stats.item}>
              <UserCheck className={statisticsStyles.stats.icon} />
              <div className={statisticsStyles.stats.number}>
                15+
              </div>
              <div className={statisticsStyles.stats.label}>
                Terapis Profesional
              </div>
            </div>

            <div className={statisticsStyles.stats.item}>
              <Building2 className={statisticsStyles.stats.icon} />
              <div className={statisticsStyles.stats.number}>
                {branchCount}
              </div>
              <div className={statisticsStyles.stats.label}>
                Cabang
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
