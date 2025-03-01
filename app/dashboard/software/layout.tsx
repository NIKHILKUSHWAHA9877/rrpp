import Page from "./page";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WhiteBg from "./WhiteBg";
import Contact from "../logoRoute/Contact";
import "./software.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <main className="overflow-clip min-h-screen rounded-b-[120px]">
      
        <FloatingNav/>
      <Page />
      <Contact/>
    </main>

    <WhiteBg
        className="w-full h-[75vh] mt-[-130px]"
        style={{ zIndex: "1", display: "flex" }}
      />
    </>
  );
}
