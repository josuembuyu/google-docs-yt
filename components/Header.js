import { IconButton } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <IconButton
        variant="text"
        className="rounded-full h-20 w-20 border-0 mr-4"
      >
        <span class="material-icons text-gray-500 text-3xl">menu</span>
      </IconButton>
      <span class="material-icons text-blue-500 text-5xl">description</span>
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <span class="material-icons text-gray-500 text-3xl">search</span>
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <IconButton
        variant="text"
        className="rounded-full hidden md:inline-flex h-20 w-20 border-0 mr-4"
      >
        <span class="material-icons text-gray-500 text-3xl">apps</span>
      </IconButton>
      <img
        className="w-12 h-12 rounded-full cursor-pointer ml-2"
        loading="lazy"
        src="https://lh3.googleusercontent.com/a/AEdFTp5CcZONqjCL4-S-4L_-nvGsEtrkG9Y0ci6YK_sJJg=s576-p-rw-no"
        alt=""
      />
    </div>
  );
};

export default Header;
