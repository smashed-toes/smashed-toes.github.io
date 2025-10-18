import { useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col px-8 justify-center items-center space-y-4">
      <h1 className="text-4xl font-bold font-heading">Hey now</h1>
      <p className="text-2xl md:text-lg">
        I'm guessing you came here for my reel, check it out below.
      </p>
      <div className="relative w-[90%] h-full aspect-video">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center header-footer-background animate-pulse z-10">
            <p className="font-display text-white text-5xl">Loading Reel...</p>
          </div>
        )}
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://player.vimeo.com/video/882724629?h=f340a06f6d"
          title="Vimeo video player"
          onLoad={handleVideoLoad}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
