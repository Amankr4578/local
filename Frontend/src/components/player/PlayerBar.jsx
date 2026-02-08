import { useEffect, useRef } from "react";
import "./player.css";

export default function PlayerBar({ song }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div className="player-bar">
      <div className="player-left">
        <strong>{song.name}</strong>
        <span>{song.artist}</span>
      </div>

      <div className="player-center">
        <button onClick={() => audioRef.current.play()}>▶</button>
        <button onClick={() => audioRef.current.pause()}>⏸</button>
      </div>

      <audio ref={audioRef} src={song.src} />
    </div>
  );
}
