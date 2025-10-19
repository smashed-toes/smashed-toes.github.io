import theaterData from "../data/theater.json";
import ProjectCard from "../components/ProjectCard";

function Theater() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold font-heading">Theater</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {theaterData.map((theater, index) => (
          <ProjectCard
            key={index}
            image={theater.image}
            title={theater.title}
            description={theater.description}
            url={theater.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Theater;
