import { useEffect, useState } from "react";

declare var TagCloud: any; // Declare the `TagCloud` as `any`

const Page31 = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Dynamically add the TagCloud script only once
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true); // Mark script as loaded once it's ready
      document.body.appendChild(script);

      // Clean up on unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]); // Ensure the script is loaded only once

  useEffect(() => {
    // Only run the TagCloud initialization once the script is loaded
    if (scriptLoaded) {
      const myTags = [
        "3D mockup video", "3D name video", "4K slideshow video", "activity video", "3D youtube sponcer ", "Youtube news", "Business video", "30 sec explainer video", "3D animation video",
        "3D walkround ", "3D house planning", "3D designes", "Animations", "Brand promotion video", "3D animation video"
      ];

      const options = {
        radius: 250,
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      };

      // Initialize TagCloud only once
      var tagCloud = TagCloud(".content", myTags, options);

      // Random color change
      var colors = [
        "#34A853", "#FBBC05", "#4285F4", "#7FBC00", "FFBA01", "#01A6F0"
      ];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      
      const contentElement = document.querySelector(".content") as HTMLElement; // Explicitly cast to HTMLElement
      if (contentElement) {
        contentElement.style.color = random_color;
      }
    }
  }, [scriptLoaded]);

  return (
    <div id="page3-1">
      <div className="content">
        {/* The 3D Tag Cloud will be rendered here by the TagCloud library */}
      </div>
    </div>
  );
};

export default Page31;
