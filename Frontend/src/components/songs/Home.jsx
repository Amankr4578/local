import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import PlayerBar from "../player/PlayerBar";
import "./Home.css";

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    {
      id: 1,
      name: "3:59 AM",
      artist: "Arjit Singh",
      year: "2003",
      duration: "3:03",
      src: "/songs/song1.mp3",
    },
    {
      id: 2,
      name: "Mera Naam Tu",
      artist: "Sharukh Khan",
      year: "2005",
      duration: "1:41",
      src: "/songs/song2.mp3",
    },
    {
      id: 3,
      name: "Bappa",
      artist: "Ritik Deshmukh",
      year: "2004",
      duration: "3:27",
      src: "/songs/song3.mp3",
    },
    {
      id: 4,
      name: "Isa",
      artist: "Sydney Sweeny",
      year: "2003",
      duration: "3:27",
      src: "/songs/song4.mp3",
    },
    {
      id: 5,
      name: "Excuses",
      artist: "Guru Randhawa",
      year: "2006",
      duration: "3:27",
      src: "/songs/song5.mp3",
    },
    {
      id: 6,
      name: "Aye Khuda",
      artist: "Jakir ali",
      year: "2004",
      duration: "3:27",
      src: "/songs/song6.mp3",
    }
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <div className="top-bar">
          <button
  className="logout-btn"
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>

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
