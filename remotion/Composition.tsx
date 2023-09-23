import { CldImage } from "next-cloudinary";
import {
  Audio,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

interface MyCompositionProps {
  videoPrompt: any[];
  audioPrompt: any[];
}

export const MyComposition = ({
  videoPrompt,
  audioPrompt,
}: MyCompositionProps) => {
  const frame = useCurrentFrame();
  return (
    <div className="relative">
      {audioPrompt.map((audio, index) => {
        return (
          <Sequence
            key={index}
            from={audio[1] * 30}
            durationInFrames={(audio[2] - audio[1]) * 30}
          >
            <Audio src={staticFile(audio[0])} />
          </Sequence>
        );
      })}
      {videoPrompt.map((video, index) => {
        const opacity =
          frame < video[1] * 30
            ? interpolate(frame, [video[1] * 30 - 30, video[1] * 30], [0, 1])
            : 1;
        return (
          <Sequence
            key={index}
            from={video[1] * 30 - 30}
            durationInFrames={(video[2] - video[1]) * 30 + 30}
            style={{ opacity: opacity }}
          >
            <CldImage
              width="1920"
              height="1080"
              src={video[0]}
              sizes="100vw"
              alt="Image Alt"
              className="absolute"
            ></CldImage>
          </Sequence>
        );
      })}
    </div>
  );
};
