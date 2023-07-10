const Header = () => {
  return (
    <div className="flex justify-end bg-gray-200 shadow-lg ">
      <nav>
        <ul className="flex p-4 m-4">
          <li className="hover:cursor-pointer m-4 p-2 font-bold">Home</li>
          <li className="hover:cursor-pointer m-4 p-2 font-bold">About</li>
          <li className="hover:cursor-pointer m-4 p-2 font-bold">Project</li>
          <li className="hover:cursor-pointer m-4 p-2 font-bold">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
