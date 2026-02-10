import { ModulesCirclesMock } from '../../../lp-system/components/ui/mocks';
import { LOCALES } from '../../../lp-system/config/preferences';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: 'en' | 'de' }>;
};

export default async function CirclesPage({ params }: Props) {
  await params;
  return (
    <div className="min-h-screen bg-bg-default py-16 flex items-center justify-center">
      <ModulesCirclesMock ariaHidden={false} />
    </div>
  );
}
