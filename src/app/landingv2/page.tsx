

import  FAQ  from "@/components/landing-page/FAQ";
import  Footer  from "@/components/landing-page/Footer";
import  ScrollToTop  from "@/components/landing-page/ScrollToTop";
import JoinWaitlist from "@/components/landing-page/Aceternity/join-waitlist";
import Investor from "@/components/landing-page/Aceternity/Investor";
import { CompareDemo } from "@/components/landing-page/Aceternity/CompareDemo";
import { RoadMap } from "@/components/landing-page/Aceternity/RoadMap";
import { Teams } from "@/components/landing-page/Aceternity/Teams";
import Three from "@/components/landing-page/Three";

function App() {
  return (
    <>

      <CompareDemo/>
      <Investor /> 
      <Three/>
      <RoadMap />
      <Teams/>
      <JoinWaitlist/>
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;