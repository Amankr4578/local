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
        <button>⏮</button>
        <button onClick={() => audioRef.current.play()}>▶</button>
        <button onClick={() => audioRef.current.pause()}>⏸</button>
        <button>⏭</button>
        <button>❤️</button>
      </div>

      <div className="player-right">
        <span>🔀</span>
        <span>🔁</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => (audioRef.current.volume = e.target.value)}
        />
        <select>
          <option>1x</option>
          <option>1.5x</option>
          <option>2x</option>
        </select>
      </div>

      <audio ref={audioRef} src={song.src} />
    </div>
  );
}
