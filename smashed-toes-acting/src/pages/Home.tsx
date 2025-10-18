function Home() {
  return (
    <div className="flex flex-col px-8 justify-center items-center space-y-4">
      <h1 className="text-4xl font-bold">Hey now</h1>
      <p className="text-2xl md:text-lg">
        I'm guessing you came here for my reel, but if you want to see more of
        my work, click on the links in the navigation bar above.
      </p>
      <div className="flex w-[90%] h-full aspect-video">
        <iframe
          className="aspect-video"
          src="https://player.vimeo.com/video/882724629?h=f340a06f6d"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
