import CTA from '../components/CTA';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import Team from '../components/Team';
import FadeIn from '../components/FadeIn';
import ReportCallout from '../components/ReportCallout';

export default function HomePage() {
  return (
    <>
      <FadeIn><Hero /></FadeIn>
      <FadeIn><PainPoints /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><HowItWorks /></FadeIn>
      <FadeIn><ReportCallout /></FadeIn>
      <FadeIn><Team /></FadeIn>
      <FadeIn><CTA /></FadeIn>
    </>
  );
}
