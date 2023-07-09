import Photo from "../Constants/logo.jpg";
import Github from "../Constants/github.jpg";
import Twitter from "../Constants/twitter.jpg";
import Linkdin from "../Constants/linkdin.jpg";

const Body = () => {
  return (
    <div className="flex-col  min-h-screen">
      <div className="flex place-content-center h-screen items-center">
        <h1 className="text-6xl text-center px-5">
          Front-End Developer
          <div className="flex">
            <a href="https://github.com/AnkurSharma1611/" target="_blank">
              <img src={Github} className=" m-4 py-5 w-10 hover:cursor-"></img>
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
    </div>
  );
};

export default Body;
