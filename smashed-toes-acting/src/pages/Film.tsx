import filmData from "../data/film.json";
import ProjectCard from "../components/ProjectCard";

function Film() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold font-heading">Film</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filmData.map((film, index) => (
          <ProjectCard
            key={index}
            image={film.image}
            title={film.title}
            description={film.description}
            url={film.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Film;
