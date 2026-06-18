import { theme } from '@/lib/theme';

export function FeaturesSection() {
  return (
    <section className={`${theme.layout.container} ${theme.spacing.section}`}>
      <div className={`${theme.cards.default} ${theme.spacing.card}`}>
        <h3 className={`${theme.text.subheading} mb-3`}>
          Tech Stack & Fitur
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Framework</p>
            <p className={`${theme.text.body}`}>Next.js 15 + TypeScript</p>
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Database</p>
            <p className={`${theme.text.body}`}>Supabase PostgreSQL</p>
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Real-time</p>
            <p className={`${theme.text.body}`}>Supabase Realtime</p>
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Security</p>
            <p className={`${theme.text.body}`}>RLS + Auth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
