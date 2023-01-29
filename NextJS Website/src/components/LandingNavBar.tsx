import { Button } from "@mantine/core";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { debounce } from "../utilities/debounce";

const LandingNavBar = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const router = useRouter();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <nav className="top-0 h-16 w-full bg-transparent flex items-center justify-end mx-auto ">
      <div className="flex flex-row justify-end space-x-5 mx-20 my-5">
        {isAuthenticated ? (
          <>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              onClick={()=>router.push('/boothmanager')}
              >
              +
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              onClick={()=>router.push('/boothmanager')}
            >
              My Rooms
            </Button>
          <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }} onClick={() => logout()}>
            <FiLogOut />
          </Button>
            )
          </>
        ) : (
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              onClick={() => loginWithRedirect()}
            >
              Login <FiLogIn className="ml-2" />
            </Button>
        )}
      </div>
    </nav>

    // <nav className="px-2 sm:px-4 py-2.5 rounded bg-transparent">
    //     <div className="container flex flex-wrap items-center justify-between mx-auto">
    //         <a href="https://flowbite.com/" className="flex items-center">
    //             <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
    //             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //         </a>
    //         <div className="flex md:order-2">
    //             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
    //             <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
    //                 <span className="sr-only">Open main menu</span>
    //                 <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //             </button>
    //         </div>

    //     </div>
    // </nav>
  );
};

export default LandingNavBar;
