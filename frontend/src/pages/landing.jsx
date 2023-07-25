import LandingSection1 from "../components/LandingSections/LandingSection1";
import LandingSection2 from "../components/LandingSections/LandingSection2";
import LandingSection3 from "../components/LandingSections/LandingSection3";
import LandingSection4 from "../components/LandingSections/LandingSection4";
import LandingSection5 from "../components/LandingSections/LandingSection5";

const Landing = () => {
  return (
    <main className="w-full max-w-[1400px]">
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <LandingSection5 />
    </main>
  );
};

export default Landing;
