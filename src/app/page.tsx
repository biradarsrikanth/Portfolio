import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import MissionSection from '@/components/mission/MissionSection';
import JourneySection from '@/components/journey/JourneySection';
import SkillsSection from '@/components/skills/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ChallengesSection from '@/components/challenges/ChallengesSection';
import CertificationsSection from '@/components/certifications/CertificationsSection';
import EngineeringLab from '@/components/lab/EngineeringLab';
import TerminalContact from '@/components/contact/TerminalContact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MissionSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <ChallengesSection />
        <CertificationsSection />
        <EngineeringLab />
        <TerminalContact />
      </main>
      <Footer />
    </>
  );
}
