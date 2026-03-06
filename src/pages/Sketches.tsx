import sketchesData from "../data/sketches.json";
import VideoCard from "../components/VideoCard";

function Sketches() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold font-heading">Sketches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 w-full">
        {sketchesData.map((sketch, index) => (
          <VideoCard
            key={index}
            url={sketch.url}
            title={sketch.title}
            description={sketch.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Sketches;
