"use client";

import { MyComposition } from "@/remotion/Composition";
import { Player } from "@remotion/player";

export default function Home() {
  const videoPrompt = [
    ["cld-sample", 0, 3],
    ["cld-sample-2", 3, 4],
    ["cld-sample-3", 4, 5],
    ["cld-sample-4", 5, 6],
    ["cld-sample-5", 6, 11],
  ];
  const audioPrompt = [
    ["1695403084162.mp3", 1, 4],
    ["sound2.mp3", 6, 9],
  ];
  const totalLength = videoPrompt[videoPrompt.length - 1][2] as number;
  return (
    <>
      <Player
        component={MyComposition}
        inputProps={{ videoPrompt: videoPrompt, audioPrompt: audioPrompt }}
        durationInFrames={30 * totalLength}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        style={{
          width: 1280,
          height: 720,
        }}
        controls
      />
    </>
  );
}
