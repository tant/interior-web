import SectionHero from '@/components/SectionHero';
import SectionStats from '@/components/SectionStats';
import SectionAbout from '@/components/SectionAbout';
import SectionServices from '@/components/SectionServices';

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionStats />
      <SectionAbout />
      <SectionServices />
    </main>
  );
}
