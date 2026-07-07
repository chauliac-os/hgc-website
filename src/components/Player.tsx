"use client";

import { useRef, useState } from "react";
import { bp } from "@/lib";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function Player({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(0);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play();
    else a.pause();
  };

  return (
    <div className="player">
      <div className="player-controls">
        <button
          type="button"
          className="play-btn"
          onClick={toggle}
          aria-label={playing ? `Mettre en pause : ${title}` : `Écouter : ${title}`}
        >
          {playing ? "‖" : "▶"}
        </button>
        <input
          className="bar"
          type="range"
          min={0}
          max={dur || 1}
          step={1}
          value={t}
          aria-label="Position dans l'enregistrement"
          onChange={(e) => {
            const a = ref.current;
            if (a) a.currentTime = Number(e.target.value);
          }}
        />
        <span className="times">
          {fmt(t)} / {fmt(dur)}
        </span>
      </div>
      <audio
        ref={ref}
        src={bp(src)}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
      />
    </div>
  );
}
