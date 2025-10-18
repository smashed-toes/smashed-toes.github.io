import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

function ProjectCard({ image, title, description, url }: ProjectCardProps) {
  return (
    <div className="relative group">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 flex items-center justify-center text-white">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p>{description}</p>
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
