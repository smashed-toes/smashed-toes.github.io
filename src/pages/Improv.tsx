import improvData from "../data/improv.json";
import VideoCard from "../components/VideoCard";

function Improv() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold font-heading">Improv</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 w-full">
        {improvData.map((clip, index) => (
          <VideoCard
            key={index}
            url={clip.url}
            title={clip.title}
            description={clip.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Improv;
