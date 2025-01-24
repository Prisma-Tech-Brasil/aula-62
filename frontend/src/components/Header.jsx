import arrowDown from "../assets/arrow-down.svg";
import settings from "../assets/mixer.svg";
import mixer from "../assets/settings-gear.svg";

export default function Header(props) {
  return (
    <header className=" flex justify-between items-center mb-6">
      <button
        className="lg:invisible"
        type="button"
        onClick={props.handleShowMusic}
        aria-label="Toggle music view"
      >
        <img
          src={arrowDown}
          alt="Arrow icon"
          className={`w-6 h-6 transition-all ${props.showPlaylist ? "rotate-90" : ""}`}
        />
      </button>
      <h1 className="text-lg font-bold">{props.title}</h1>
      <button
        type="button"
        aria-label={props.showPlaylist ? "Mixer settings" : "General settings"}
      >
        <img
          src={props.showPlaylist ? mixer : settings}
          alt={props.showPlaylist ? "Mixer icon" : "Settings icon"}
          className="w-6 h-6"
        />
      </button>
    </header>
  );
}