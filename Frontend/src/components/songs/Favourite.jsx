import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import PlayerBar from "../player/PlayerBar";
import "./Home.css";

export default function Favourite() {
  const [currentSong, setCurrentSong] = useState(null);

  const favourites = [
    { id: 1, name: "3:59 AM", artist: "Arijit Singh", year: "2003", duration: "3:03", src: "/songs/song1.mp3" },
    { id: 2, name: "Bappa", artist: "Ritik Deshmukh", year: "2004", duration: "3:27", src: "/songs/song3.mp3" },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <h2 className="section-title">Favourite Songs</h2>

        <div className="song-table">
          <div className="table-header">
            <span>No</span>
            <span>Name</span>
            <span>Artist</span>
            <span>Year</span>
            <span>Duration</span>
          </div>

          {favourites.map((song, index) => (
            <div
              key={song.id}
              className="song-row"
              onClick={() => setCurrentSong(song)}
            >
              <span>{index + 1}</span>
              <span>{song.name}</span>
              <span>{song.artist}</span>
              <span>{song.year}</span>
              <span>{song.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {currentSong && <PlayerBar song={currentSong} />}
    </div>
  );
}
