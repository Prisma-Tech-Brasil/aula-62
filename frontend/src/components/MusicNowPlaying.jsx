export default function MusicNowPlaying({
  showProgressBar,
  image,
  title,
  artists
}) {
  return (
    <div
      className={`transition-all duration-500 ease-in-out flex items-center ${
        !showProgressBar ? "flex-row items-center space-x-4" : "flex-col"
      }`}
    >
      <img
        className={`transition-all duration-500 ease-in-out md:w-80 ${
          showProgressBar ? "rounded-3xl w-full mb-4" : "rounded-2xl w-16"
        }`}
        src={image}
        alt="Music icon"
      />
      <div>
        <h2
          className={`font-bold transition-all duration-500 ease-in-out ${
            showProgressBar ? "text-xl" : "text-base"
          }`}
        >
          {title}
        </h2>
        <h3
          className={`transition-all duration-500 ease-in-out ${
            showProgressBar ? "text-lg" : "text-sm"
          }`}
        >
          {artists}
        </h3>
      </div>
    </div>
  );
}
