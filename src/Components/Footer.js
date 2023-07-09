import Github from "../Constants/github.jpg";
import Twitter from "../Constants/twitter.jpg";
import Linkdin from "../Constants/linkdin.jpg";

const Footer = () => {
  return (
    <div className="mt-auto flex justify-between bg-gray-200 shadow-lg">
      <div className="py-8 px-4 text-2xl">
        <h1>© 2023 Copyright: All Rights Reserved</h1>
      </div>
      <div className=" flex justify-end">
        <a href="https://github.com/AnkurSharma1611/" target="_blank">
          <img src={Github} className=" m-4 py-5 w-8 hover:cursor-"></img>
        </a>
        <a href="https://twitter.com/ankursh_ " target="_blank">
          <img
            src={Twitter}
            className=" m-4 py-5 w-8 hover:cursor-pointer"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/ankur-sharma-86828616a/"
          target="_blank"
        >
          <img
            src={Linkdin}
            className=" m-4 py-5 w-8 hover:cursor-pointer"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
