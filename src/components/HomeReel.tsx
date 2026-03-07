import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const VIMEO_URL = "https://player.vimeo.com/video/882724629?h=f340a06f6d";

function HomeReel() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleMobileClick = () => {
    window.open(VIMEO_URL + "&autoplay=1", "_blank");
  };

  return (
    <div className="flex flex-col px-8 justify-center items-center space-y-4">
      <h1 className="text-5xl font-bold font-heading">Hey now</h1>
      <p className="md:text-2xl text-lg font-heading">
        I'm guessing you came here for my reel, check it out below.
      </p>
      {isMobile ? (
        // Mobile: Portrait preview with click to open
        <div className="w-full max-w-md">
          <button
            onClick={handleMobileClick}
            className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group"
          >
            {/* Thumbnail background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900">
              <img
                src="/images/reel-thumbnail-mobile.jpeg"
                alt="Acting Reel Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-active:bg-black/40 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-black ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Tap to watch label */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="px-4 py-2 bg-white/90 rounded-full text-black font-semibold text-sm">
                Tap to Watch Reel
              </span>
            </div>
          </button>
        </div>
      ) : (
        <div className="relative w-[90%] h-full aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center header-footer-background backdrop-blur-[20px] animate-pulse z-10">
              <p className="font-display text-white text-5xl">
                Loading Reel...
              </p>
            </div>
          )}
          <iframe
            className="w-full h-full rounded-2xl"
            src={VIMEO_URL}
            title="Vimeo video player"
            onLoad={handleVideoLoad}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default HomeReel;
