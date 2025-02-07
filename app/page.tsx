// Home.tsx

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


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-0 px-0 overflow-clip">
      {/* Content with constrained width */}
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav />
        <Hero />
        <Servic/>
<StickyScroll/>
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>

      {/* Full width background container for AImodels */}
      <div className="w-full m-0 p-0">
        <AImodels /> {/* Full-width background section */}
      </div>

      {/* Content with constrained width */}
      <div className="max-w-7xl w-full mx-auto">
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
