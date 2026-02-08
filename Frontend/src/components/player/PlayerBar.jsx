export default function PlayerBar({ song }) {
  return (
    <div className="player-bar">
      <div className="player-left">
        <strong>{song.name}</strong>
        <span>{song.artist}</span>
      </div>

      <div className="player-center">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>

      <div className="player-right">
        <span>🔊</span>
      </div>
    </div>
  );
}
