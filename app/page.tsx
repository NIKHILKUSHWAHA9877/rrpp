
import '@fontsource/mukta';
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Testimonials from '@/components/Testimonials';
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import AImodels from "@/components/AImodels";
import Servic from "@/components/Servic";
import StickyScroll from "@/components/StickyScroll";
import WhiteBg from "@/components/WhiteBg";
import Cardd from '@/components/ui/Cardd';
import GridCards from '@/components/ui/gridcards';
export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="relative bg-[rgb(0,3,25)] flex justify-center items-center flex-col mx-auto sm:px-0 px-0 overflow-clip z-100 rounded-b-[120px]">
        {/* Content with constrained width */}
        <div className="max-w-7xl w-full mx-auto">
          <FloatingNav />
          <Hero />
          <Servic />
          <StickyScroll />
          <Grid />
          <RecentProjects />
          <GridCards/>
          <Cardd />
          <Experience />
          <Approach />
        </div>

        {/* Full width background container for AImodels */}
        <div className="w-full m-0 p-0">
          <AImodels />
        </div>

        {/* Content with constrained width */}
        <div className="max-w-7xl w-full mx-auto">
          <Testimonials />
          <Footer />
        </div>
      </main>

      {/* WhiteBg Outside Main */}
      <WhiteBg
        className="w-full h-[85vh] mt-[-120px]" // Negative margin to pull up
        style={{
          zIndex: "1", // Ensuring it appears above the background, below the main content
          display: "flex",
        }}
      />
    </>
  );
}
