import FrontendPhoto from "../Constants/frontend.jpg";

const About = () => {
  return (
    <div className=" flex bg-gray-200 place-content-center h-screen items-center">
      <div className="flex-wrap items-center box-border h-3/6 w-3/6  bg-white border-black border-2 ">
        <h1 className="flex-row text-center font-bold text-2xl">About</h1>
        <p className="p-4 font-bold ">
          Ankur is a skilled frontend developer with expertise in HTML, CSS, and
          JavaScript. Proficient in React, he transforms design concepts into
          user-friendly websites. Detail-oriented and a strong problem solver,
          Ankur delivers exceptional frontend solutions while collaborating
          effectively with cross-functional teams.
        </p>
        <div className="flex place-content-center shrink h-4/6 w-full items-center">
          <img src={FrontendPhoto} className="h-3/6"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
