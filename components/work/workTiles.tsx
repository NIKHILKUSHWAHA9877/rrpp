import { ReactNode } from "react";
import "@/app/dashboard/routerone/routerr.css"
export type WorkTile = {
  title: ReactNode;  // ✅ Allows both strings & JSX
  description: ReactNode;
  media: 
    | { type: 'image'; src: string;} 
    | { type: 'video'; src: string; };
};

export const workTiles: WorkTile[] = [
  {
    description: `The filmmakers of Galwakdi entrusted Googenix Video Editors to refine and enhance key scenes of this Punjabi blockbuster! Now streaming on Amazon Prime Video, our editing expertise helped shape the film’s cinematic appeal. Watch the trailer to see our work in action! 🚀✨`,
    title: (
      <>
        <span className="underlined underline-clip">Googenix</span> | Editors Hired by Galwakdi Filmmakers – Watch Our Work in Action!
      </>
    ),
    media: {
      type: "video",
      src: "/galwakdvid.mp4",
    },
  },
  {
    description:
      "Ohhh yeahhh, baby! 💥 Our Googenix editors turned up the heat on Ikko Mikke with some next-level cuts & transitions! 🎥✨ With 250M+ views and profits stacking up like a viral TikTok trend 💰📈, this hit proves that when we edit, we don’t just cut—we create magic! Watch now and see why the big leagues trust us to bring the boom to their visuals! 🎶🚀🔥",
    title: (
      <>
        <span className="underlined underline-clip">Googenix</span> Editors Behind the Superhit Ikko Mikke –{" "}
        <span className="underlined underline-clip2">250M+ Views</span> & Millions in Profit!
      </>
    ),
    media: {
      type: "image",
      src: "/ikko.png",
    },
  },
  {
    description: `I maintained`,
    title: "Aphex Planner",
    media: {
      type: "video",
      src: "/planner-demo.mp4",
    },
  },
  {
    description: `I built`,
    title: "Aphex Publication",
    media: {
      type: "image",
      src: "/publication-app.webp",
    },
  },

]
const WorkTileComponent: React.FC<WorkTile> = ({ title, description, media }) => {
  return (
    <div className="work-tile">
      <h6>{title}</h6>
      <p className="work-tile-description">{description}</p>
      {media.type === "image" ? (
        <img className="work-tile-media" src={media.src} alt="work media" />
      ) : (
        <video className="work-tile-media" src={media.src} controls />
      )}
      
    </div>
    
  );
  
};

export default WorkTileComponent;