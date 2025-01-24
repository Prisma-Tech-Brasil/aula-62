import liked from "../assets/hearth.svg";
import nonLiked from "../assets/hearth-liked.svg";

export default function MusicContainer({ music, index }) {
  return (
    <div
      className="flex flex-row justify-between gap-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-row gap-2 lg:gap-4">
        <img
          className="rounded-2xl h-14 sm:h-16 md:h-20 lg:h-24"
          src={music.image}
          alt={`${music.title} icon`}
        />
        <div>
          <h4 className="text-lg sm:text-xl font-semibold truncate max-w-52 sm:max-w-60 lg:max-w-[30rem]">
            {music.title}
          </h4>
          <h3 className="text-xs sm:text-sm text-gray-300 truncate max-w-52 sm:max-w-60 lg:max-w-[28rem]">
            {music.artists}
          </h3>
        </div>
      </div>
      <img
        className="h-4 sm:h-5 lg:h-6 mt-1"
        src={music.liked ? liked : nonLiked}
        alt="Like icon"
      />
    </div>
  );
}
