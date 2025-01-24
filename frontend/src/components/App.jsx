import { useState } from "react";
import Header from "./Header";
import NowPlaying from "./NowPlaying";
import Playlist from "./Playlist";

export default function App() {
  const [showProgressBar, setShowProgressBar] = useState(true);

  const handleShowMusic = () => {
    setShowProgressBar(!showProgressBar);
  };

  return (
    <>
      <Header
        showPlaylist={!showProgressBar}
        handleShowMusic={handleShowMusic}
        title="Tocando Agora"
      />
      <main className="flex flex-col   lg:flex-row-reverse lg:justify-between gap-4">
        <Playlist showPlaylist={!showProgressBar} />
        <NowPlaying showProgressBar={showProgressBar} />
      </main>
    </>
  );
}
