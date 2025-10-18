import sketchesData from "../data/sketches.json";

function Sketches() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold font-heading">Sketches</h1>
      <div className="flex flex-col items-center justify-center pt-4 gap-4">
        {sketchesData.map((sketch, index) => (
          <div key={index} className="mb-8 max-w-screen">
            <h2 className="mb-4 text-center text-2xl font-semibold">
              {sketch.title}
            </h2>
            <iframe
              className="aspect-video"
              src={sketch.url.replace("watch?v=", "embed/")}
              title={sketch.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mt-2 text-lg">{sketch.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sketches;
