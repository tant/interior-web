import SectionHero from '@/components/SectionHero';
import SectionStats from '@/components/SectionStats';
import SectionAbout from '@/components/SectionAbout';
import SectionServices from '@/components/SectionServices';
import SectionCataglog from '@/components/SectionCatalog';
import SectionReview from '@/components/SectionReview';

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionStats />
      <SectionAbout />
      <SectionServices />
      <SectionCataglog />
      <SectionReview/>
    </main>
  );
}
