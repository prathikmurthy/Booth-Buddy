import Head from "next/head";
import Image from "next/image";
import Booth from "../../components/Booth";
import { Inter } from "@next/font/google";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import useSWR from 'swr'


const inter = Inter({ subsets: ["latin"] });

export default function App() {

  // const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())
  
  const {isAuthenticated, user, isLoading, loginWithRedirect, logout} = useAuth0();
  
  if (isLoading) return <div>loading...</div>
  
  
  if (!isAuthenticated) {
    loginWithRedirect();
  }
  
  const { data, error } = useSWR('/api/GetRooms/' + user?.sub, axios.get)

  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>

  // render data
  console.log(data)

  // console.log(data);

  let rmProps = {
    name: "SASE",
    description: "Society of Asian Scientists and Engineers",
    event: "SASE Hackathon",
    gradient: ["#008836", "#FFFFFF"],
    active: true,
  };
  return (
    <>
      <div className="container mx-auto py-4">

        <div className="absolute top-16 right-16">
          <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000"}})}>Log Out<FiLogOut className="pl-4 text-4xl"/></Button>
        </div>

        <div className="text-white text-center flex w-full flex-col mt-44">
          <h1 className="text-5xl font-extrabold text-slate-200">Hi, {user?.given_name}!</h1>
          <h2 className="py-3 text-2xl font-bold antialiased text-[#9C9C9C] pb-12">
            Welcome to your Booths
          </h2>
          <div>
          </div>
          <div className="mx-auto flex flex-col w-[45%]">
            <div className="flex flex-row justify-between">
              <h3 className="p-3 text-xl font-bold text-left opacity-60">
                1 Active Booth
              </h3>
              <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add Booth +</Button>
            </div>
            <Booth {...rmProps}></Booth>
            <Booth {...rmProps}></Booth>
            <h3 className="text-xl mt-4 pb-1 font-bold text-left opacity-60">
              1 Inactive Booth
            </h3>
            <Booth {...rmProps} active={false}></Booth>
          </div>
        </div>
      </div>
    </>
  );
}
