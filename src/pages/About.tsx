import SamMastoHeadshot1 from "/images/Sam_Masto_Headshot1.jpg";
import SamMastoHeadshot2 from "/images/Sam_Masto_Headshot2.jpg";
import { useState } from "react";

function About() {
  const images = [
    SamMastoHeadshot1,
    SamMastoHeadshot2 /* , more images here */,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="p-8 flex flex-col ">
      <h1 className="text-4xl font-bold font-heading">About Me</h1>
      <h2 className="text-xl font-bold font-heading mt-2">
        I know these are usually written in 3rd person, but I wrote this so I'm
        using 1st person. Sue me.
      </h2>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3 pr-5">
          <p className="mt-4 text-2xl">
            I'm an actor, singer, and improviser based in Los Angeles.
            Originally from San Francisco, I studied at Brown University where I
            split my time between Theater and Computer Science. In 2021, I was
            awarded the MH Hicks Award for outstanding work in Brown's Theater
            Arts and Performance Studies department.
            <br /> <br /> After graduating, I moved to LA with the goal of
            wearing a t-shirt in January. Since then, I've performed in a
            variety of award-winning short films (Work Life, Apologized), the
            2024 Feature Film "Gnome Sick: 7 Slays Till Mithras", theatrical
            productions (Cannibal: The Musical, Space Captain: Captain of
            Space), and various improv and sketch shows. <br /> <br /> I'm
            currently working through the Groundlings lab track and I
            additionally train at UCB. I'm commercially represented by AKA
            Talent Agency. In my free time, you can find me head-banging at a
            concert, running a D&D session, or maybe singing about drinking piña
            coladas in the rain.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-8 justify-center aspect-2/3 relative">
          <img
            src={images[currentIndex]}
            alt="Carousel Image"
            className="rounded-lg transition-all duration-1000 ease-in-out" // Add transition effect
          />
          <div className="flex justify-center mt-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
