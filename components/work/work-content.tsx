import Image from 'next/image';
import { WorkContainer } from './work-container';
import { WorkLeft } from './work-left';
import { WorkRight } from './work-right';
import { WorkTile } from './workTiles';
import MediaThemeDemuxed2022 from 'player.style/demuxed-2022/react';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, media } = work; // ✅ Use 'media' to determine type

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-2xl p-2 font-medium md:text-2xl xl:text-3xl">{description}</div>
        <span className="text-4xl font-bold tracking-tight md:text-3xl xl:text-6xl">{title}</span>
      </WorkLeft>

      <WorkRight progress={progress}>
        <div className="drop-shadow-2xl sm:mt-10 md:mt-24 relative">
          {/* Background Wrapper */}
          <div
            className="absolute inset-0 z-0"
            style={{
              width: "120%",  // Expands background width
              height: "100%",  // Full height
            }}
          ></div>

          {/* ✅ Render Image or Video Based on `media.type` */}
          {media.type === "image" ? (
  <div style={{ width: "450px", height: "630px" , position: "relative", top: "-50px" }}> {/* ✅ Control width with style */}
    <Image
      src={media.src}
      alt={title as string}
      fill // ✅ This allows width control via parent div
      style={{ objectFit: "cover" }} // ✅ Prevents stretching
      className="rounded-lg relative pointer-events-auto imgimg"
    />
  </div>
          ) : (
            <MediaThemeDemuxed2022>
              <video
                slot="media"
                src={media.src}
                playsInline
                crossOrigin
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.3, 1.2)",
                }}
                className="rounded-lg relative pointer-events-auto vidvid"
              />
            </MediaThemeDemuxed2022>
          )}
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
