import { useMediaQuery } from "react-responsive";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

function ProjectCard({ image, title, description, url }: ProjectCardProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Mobile version of project card
  if (isMobile) {
    console.log("Mobile");
    return (
      <div className="flex flex-col max-w-screen">
        {url ? (
          <>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} className="w-full h-auto" />
            </a>
            <p className="italic text-center mt-2">
              Click the image above to watch
            </p>
          </>
        ) : (
          <img src={image} alt={title} className="w-full h-auto" />
        )}
        <div className="inset-0 flex items-center justify-center text-white">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version of project card
  return (
    <div className="relative group">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 flex items-center justify-center text-white">
            <div className="p-4 space-y-2">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p>{description}</p>
              <p className="italic">Click to watch</p>
            </div>
          </div>
        </a>
      ) : (
        <div>
          <img src={image} alt={title} className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 flex items-center justify-center text-white">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
