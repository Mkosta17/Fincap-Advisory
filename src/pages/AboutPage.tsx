import CTA from '../components/CTA';
import Founders from '../components/Founders';
import Milestones from '../components/Milestones';
import Mission from '../components/Mission';
import Values from '../components/Values';
import Story from '../components/Story';
import FadeIn from '../components/FadeIn';

export default function AboutPage() {
  return (
    <>
      <Mission />
      <FadeIn>
        <Story />
      </FadeIn>
      <FadeIn>
        <Founders />
      </FadeIn>
      <FadeIn>
        <Milestones />
      </FadeIn>
      <FadeIn>
        <Values />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
    </>
  );
}
