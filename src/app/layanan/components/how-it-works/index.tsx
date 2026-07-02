import { ClipboardCheck, User, Activity, CalendarCheck } from 'lucide-react';
import { howItWorksStyles } from './styles';

const steps = [
  {
    icon: User,
    step: '01',
    title: 'Konsultasi Awal',
    description: 'Datang ke cabang kami atau hubungi via WhatsApp untuk konsultasi awal dengan tim kami',
  },
  {
    icon: Activity,
    step: '02',
    title: 'Diagnosis',
    description: 'Tim ahli kami akan menganalisa kondisi kesehatan Anda dan menentukan treatment yang tepat',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Perencanaan Treatment',
    description: 'Buat rencana treatment yang disesuaikan dengan kebutuhan kesehatan Anda',
  },
  {
    icon: CalendarCheck,
    step: '04',
    title: 'Pelaksanaan & Follow-up',
    description: 'Lakukan treatment sesuai jadwal dan kami akan melakukan follow-up untuk monitoring progres',
  },
];

export function HowItWorksSection() {
  return (
    <section className={howItWorksStyles.section.container}>
      <div className={howItWorksStyles.container.wrapper}>
        <div className={howItWorksStyles.header.container}>
          <h2 className={howItWorksStyles.header.title}>Proses Pelayanan</h2>
          <p className={howItWorksStyles.header.description}>
            Langkah mudah untuk memulai perjalanan kesehatan Anda bersama Herbal Insani
          </p>
        </div>

        <div className={howItWorksStyles.steps.container}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const useDashed = index % 2 === 0;
            return (
              <div key={index} className={howItWorksStyles.step.container}>
                <div className={howItWorksStyles.step.numberWrapper}>
                  <div className={howItWorksStyles.step.number}>{step.step}</div>
                  <div className={howItWorksStyles.step.iconWrapper}>
                    <Icon className={howItWorksStyles.step.icon} />
                  </div>
                </div>
                {!isLast && (
                  <div className={useDashed ? howItWorksStyles.step.connectorDashed : howItWorksStyles.step.connector}></div>
                )}
                <h3 className={howItWorksStyles.step.title}>{step.title}</h3>
                <p className={howItWorksStyles.step.description}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
