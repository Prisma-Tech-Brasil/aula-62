import ProgressBar from "./ProgressBar";
import PlayerController from "./PlayerController";
import MusicNowPlaying from "./MusicNowPlaying";
import icarus from "../assets/icarus-bk.jpeg";

export default function NowPlaying({ showProgressBar }) {
  return (
    <main
      className={`transition-all duration-500 ease-in-out ${
        !showProgressBar
          ? "fixed bottom-0 left-0 w-full flex flex-row items-center justify-between p-4 rounded-custom-glass bg-glass-light shadow-custom-glass backdrop-blur-md"
          : ""
      }`}
    >
      <MusicNowPlaying
        showProgressBar={showProgressBar}
        image={icarus}
        title={"Música de amor nunca mais"}
        artists={"BK, Luccas Carlos, Nansy Silvvz, Gigantes"}
      />
      {showProgressBar && <ProgressBar />}
      <PlayerController showControlButtons={showProgressBar} />
    </main>
  );
}
