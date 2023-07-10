import Photo from "../Constants/logo.jpg";
import Github from "../Constants/github.jpg";
import Twitter from "../Constants/twitter.jpg";
import Linkdin from "../Constants/linkdin.jpg";
import react from "../Constants/react.svg";
import html from "../Constants/html.svg";
import javascript from "../Constants/javascript.svg";
import css from "../Constants/css.svg";
import tailwind from "../Constants/tailwind.svg";
const Body = () => {
  return (
    <section className="min-h-screen">
      <div>
        <div className="flex place-content-center h-full items-center">
          <h1 className="text-6xl text-center px-5">
            Front-End Developer
            <div className="flex">
              <a href="https://github.com/AnkurSharma1611/" target="_blank">
                <img
                  src={Github}
                  className=" m-4 py-5 w-10 hover:cursor-"
                ></img>
              </a>
              <a href="https://twitter.com/ankursh_ " target="_blank">
                <img
                  src={Twitter}
                  className=" m-4 py-5 w-10 hover:cursor-pointer"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/ankur-sharma-86828616a/"
                target="_blank"
              >
                <img
                  src={Linkdin}
                  className=" m-4 py-5 w-10 hover:cursor-pointer"
                ></img>
              </a>
            </div>
          </h1>
          <img
            src={Photo}
            className="border-4 bg-gray-200 border-black rounded-full w-56"
          ></img>
        </div>
        <div className="flex content-center justify-center hover:animate-bounce">
          <h1 className="flex font-semibold text-xl m-3 p-10 ">Tech Stack </h1>
          <div className="flex align-bottom m-2 p-4">
            <img src={html} className="w-20 border-4 rounded-full "></img>
            <img src={css} className="w-20 border-4 rounded-full "></img>
            <img src={javascript} className="w-20 border-4 rounded-full "></img>
            <img src={react} className="w-20 border-4 rounded-full "></img>
            <img src={tailwind} className="w-20 border-4 rounded-full "></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
