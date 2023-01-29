import { motion } from "framer-motion";
import { Button, Modal, Notification } from '@mantine/core';
import { useEffect, useState } from "react";
import useSWR from 'swr'
import axios from "axios";


type BoothProps = {
  name: string;
  description: string;
  event: string;
  gradient: Array<string>;
  active: boolean;
  roomid: Number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Booth = (props: BoothProps) => {
  const [opened, setOpened] = useState(false);


    let regClass = "text-left rounded-xl bg-gradient-to-r from-blue-500 to-slate-400 p-4";
    let inactiveClass = "text-left rounded-xl bg-[#454545] p-4";


  const { data, error, mutate }= useSWR("/api/GetRoomCards/" + props.roomid, fetcher);

  if (!data) return <div className="text-white">Loading...</div>

  console.log(data)


  async function updateActivity() {
    await axios.post('/api/UpdateActivity', {
      id: props.roomid,
      active: props.active
    })
    mutate()
    return <div><Notification title="Default notification">
      This is default notification with title and body
    </Notification></div>
  }

  // useEffect(() => {
  //   mutate()
  // }, [opened])

  return (
    <motion.div className="py-2"
        whileHover={{
            scale: 1.05,
            transition: {ease: "easeInOut" ,duration: .3},
        }}
    >
      <Modal opened={opened} onClose={() => {setOpened(false)}} size="xl" className="">
        <p className="text-4xl antialiased text-slate-400 pt-4 tracking-wide font-extrabold text-center pb-2">{props.event}</p>
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 text-center p-4">{props.name}</p>
        <p className="text-2xl antialiased text-slate-400 pt-4 tracking-wide font-bold text-center pb-2 max-w-2xl mx-auto">{props.description}</p>
        <div className="flex flex-row justify-center mt-8">
          {props.active ? <Button className="" size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={() => { updateActivity() }}>Make Inactive</Button> : <Button className="" size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={() => { updateActivity() }}>Make Active</Button> }
        </div>
        
        <p className=" mt-12 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 text-center p-4">Collected Contact Cards</p>
        <p className="text-2xl antialiased text-slate-400 tracking-wide font-bold text-center pb-2 max-w-2xl mx-auto italic">Total: {data.data.length} Cards</p>
        <div className="mt-8 mb-12">
          <div className="grid grid-cols-3 text-slate-200 font-bold text-xl text-center border-b-2 border-white ml-4 mr-4"><p>Name</p><p>Email</p><p>Phone</p></div>
            {data.data.map((x: any) => { return <div className="grid grid-cols-3 text-slate-200 text-xl text-center pt-2"><p>{x.name}</p><p>{x.email}</p><p>{x.phone}</p></div>})}
        </div>
      </Modal>

      <button onClick={() => {setOpened(true)}} className="w-full mx-auto">
        <a href="#" className="w-full mx-auto">
          <div className={props.active ? regClass : inactiveClass}>
            <h2 className="font-bold text-3xl">{props.name}</h2>
            <h3 className="font-medium text-lg opacity-[50%]">{props.event}</h3>
          </div>
        </a>
      </button>
    </motion.div>
  );
};

export default Booth;
