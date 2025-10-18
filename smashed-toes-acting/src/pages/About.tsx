import SamMastoHeadshot from "../assets/images/Sam_Masto_Headshot1.jpg";

function About() {
  return (
    <div className="p-8 flex flex-col ">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3 pr-5">
          <p className="mt-4 text-lg">
            Sam Masto is your quintessential triple threat (actor, singer,
            software engineer), from San Francisco, CA. He was first exposed to
            the horrors of student theater when he was 13 and never looked back.
            He enrolled in Stagedoor Manor Performing Arts Training Center where
            he spent his summers playing roles like Charlemagne in Pippin and
            originated the role of Jake in Evil Dead The Musical (High School
            Version). <br /> <br /> In September of 2017 he enrolled in Brown
            University and studied Computer Science between shows and
            rehearsals. He began screen acting his Sophomore year when he acted
            in his first production with the student film group, Brown Motion
            Pictures (BMP). Between BMP, independent film projects, and student
            theater, he's played roles varying from villainous mattress shop
            owners to romantic film directors. He furthered his passion for
            acting in the Theater Arts and Performance Studies (TAPS) department
            through extensive classes and productions, and in 2021 was awarded
            the MH Hicks Award for outstanding and dedicated work in the
            department. <br /> <br /> After graduating in May of 2021, he
            realized that he never should have left California and moved to LA
            with the goal of wearing a t-shirt in January. Since moving, he has
            performed in short films, independent features, stage plays,
            musicals, improv, and sketch shows. He’s currently working through
            the Groundlings lab track, and is dabbling in additional improv
            training at UCB. He is commercially represented by AKA Talent
            Agency. In his free time, you can find him head-banging at a
            concert, running a dungeons and dragons session, or maybe singing
            about drinking piña coladas in the rain.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-8 justify-center aspect-2/3">
          <img
            src={SamMastoHeadshot}
            alt="Sam's Big Ol Head"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
