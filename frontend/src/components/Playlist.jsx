import musics from "../mocks/music";
import MusicContainer from "./MusicContainer";

export default function Playlist({ showPlaylist }) {
  // Esconde Playlist apenas em telas pequenas e se `showPlaylist` for false
  const isHidden = !showPlaylist ? "hidden lg:flex" : "flex";

  return (
    <main className={`${isHidden} flex-col gap-4`}>
      {musics.map((music, index) => (
        <MusicContainer music={music} key={index} />
      ))}
    </main>
  );
}
