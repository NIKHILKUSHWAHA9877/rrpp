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
        <div className="text-sm p-2 font-medium md:text-sm xl:text-2xl">{description}</div>
        <span className="text-xl font-bold tracking-tight md:text-2xl xl:text-5xl">{title}</span>
      </WorkLeft>

      <WorkRight progress={progress}>
        <div className="drop-shadow-2xl mt-0 sm:mt-10 md:mt-2 lg:mt-24 relative">
          {/* Background Wrapper */}
        

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
