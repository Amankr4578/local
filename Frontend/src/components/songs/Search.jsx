import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import PlayerBar from "../player/PlayerBar";
import "./Home.css";

export default function Search() {
  const [currentSong, setCurrentSong] = useState(null);
  const [query, setQuery] = useState("");

  const songs = [
    { id: 1, name: "3:59 AM", artist: "Arijit Singh", year: "2003", duration: "3:03", src: "/songs/song1.mp3" },
    { id: 2, name: "Mera Naam Tu", artist: "Shahrukh Khan", year: "2005", duration: "1:41", src: "/songs/song2.mp3" },
    { id: 3, name: "Bappa", artist: "Ritik Deshmukh", year: "2004", duration: "3:27", src: "/songs/song3.mp3" },
  ];

  const filtered = songs.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <h2 className="section-title">Search</h2>

        <input
          className="search-box"
          placeholder="Search songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="song-table">
          <div className="table-header">
            <span>No</span>
            <span>Name</span>
            <span>Artist</span>
            <span>Year</span>
            <span>Duration</span>
          </div>

          {filtered.map((song, index) => (
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
