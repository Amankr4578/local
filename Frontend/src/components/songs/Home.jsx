import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import PlayerBar from "../player/PlayerBar";
import "./Home.css";

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    { id: 1, name: "J'me FPM", artist: "TriFace", duration: "3:03" },
    { id: 2, name: "Trio HxC", artist: "TriFace", duration: "1:41" },
    { id: 3, name: "Un Poil De Relifion", artist: "TriFace", duration: "3:27" },
    { id: 4, name: "Apologies", artist: "TriFace", duration: "2:25" },
    { id: 5, name: "Mind Asylum", artist: "Skaut", duration: "3:03" }
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <div className="top-bar">
          <button className="logout-btn">Logout</button>
        </div>

        <h2 className="section-title">Playlists</h2>

        <div className="playlist-row">
          <div className="playlist-card">Workout</div>
          <div className="playlist-card">Chill</div>
          <div className="playlist-card">Happy</div>
          <div className="playlist-card">Relaxing</div>
          <div className="playlist-card">Rock</div>
        </div>

        <div className="song-table">
          <div className="table-header">
            <span>No</span>
            <span>Name</span>
            <span>Artist</span>
            <span>Year</span>
            <span>Duration</span>
          </div>

          {songs.map((song, index) => (
            <div
              key={song.id}
              className="song-row"
              onClick={() => setCurrentSong(song)}
            >
              <span>{index + 1}</span>
              <span>{song.name}</span>
              <span>{song.artist}</span>
              <span>-</span>
              <span>{song.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Player appears only when song is selected */}
      {currentSong && <PlayerBar song={currentSong} />}
    </div>
  );
}
