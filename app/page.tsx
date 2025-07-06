import SectionHero from '@/components/SectionHero';
import SectionStats from '@/components/SectionStats';
import SectionAbout from '@/components/SectionAbout';

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionStats />
      <SectionAbout />
    </main>
  );
}
