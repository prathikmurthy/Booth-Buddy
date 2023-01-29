import { motion } from "framer-motion"
import { FiChevronsDown } from "react-icons/fi"
import Image from "next/image";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000" } })}>
      Log Out
    </button>
  );
};

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <p>{user?.sub}</p>
      </div>
    ) : null
  );
};


export default function Landing(props: any) {
  // const { isAuthenticated } = useAuth0();

  return (
    <section className="container h-screen w-screen flex mx-auto tracking-widest">
      {/* <div className="text-white text-3xl m-4"> */}
        {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
        {/* <LoginButton />
        <LogoutButton /> */}
        {/* <div className="m-4">
        <Profile />
        </div>
      </div> */}
      <motion.div className="flex flex-col justify-center align-middle w-full text-center -mt-24" >
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -30, opacity: 0 }} transition={{ duration: 1, delay: 3.5 }}>
          <Image src={"/../public/stand.gif"} width={300} height={300} alt="a" className="mx-auto"/>
        </motion.div>
        <motion.h1 className="text-7xl font-extrabold text-slate-100" animate={{ y: 0, opacity: 1 }} initial={{ y: -50, opacity: 0 }} transition={{ duration: 1, delay: 1 }}>
          Booth<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Buddy</span>
        </motion.h1>
        <motion.h1 className="text-4xl antialiased text-slate-400 pt-4 tracking-wide" animate={{ y: 0, opacity: 1 }} initial={{ y: -20, opacity: 0 }} transition={{ duration: 1, delay: 2.5 }}>
          Saving flyers, one page at a time.
        </motion.h1>

        <motion.div className="text-7xl text-center text-white w-full mb-24" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 4.5}}>
          <motion.div animate={{ y: [90, 150, 90] }} initial={{y: 120}} transition={{type: "spring", duration: 2, repeat: Infinity}}><FiChevronsDown className="mx-auto" /></motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
