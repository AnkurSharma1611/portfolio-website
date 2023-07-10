import Mail from "../Constants/envelope-open-text-solid.svg";
import Locate from "../Constants/location-dot-solid.svg";
const Contact = () => {
  return (
    <section>
      <div className="">
        <div className="flex flex-col place-content-center items-center h-2/5 space-y-4">
          <div className="pb-16 pe-40">
            <p className="font-bold text-lg text-blue-500">CONTACT</p>
            <h3 className="font-semibold">Feel free to reach out to me...</h3>
          </div>
          <div className="contact_icons">
            <div className="flex flex-row place-content-center items-center space-x-10 ">
              <div className="">
                <img src={Mail} className="w-9 border-separate"></img>
                <h1>Bareilly, India</h1>
              </div>
              <div className="">
                <img src={Locate} className="w-7 border-separate"></img>
                <h1 className="hover:cursor-pointer">
                  <a href="ankursharma.1611@gmail.com"></a>
                  ankursharma.1611@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
