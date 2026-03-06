interface VideoCardProps {
  url: string;
  title: string;
  description: string;
}

function VideoCard({ url, title, description }: VideoCardProps) {
  return (
    <div className="mb-8 max-w-screen w-full">
      <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
      <iframe
        className="aspect-video w-full rounded-2xl"
        src={url.replace("watch?v=", "embed/")}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="mt-2 font-bold text-xl w-full">{description}</p>
    </div>
  );
}

export default VideoCard;
