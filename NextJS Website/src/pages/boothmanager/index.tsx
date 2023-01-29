import Head from "next/head";
import Image from "next/image";
import Booth from "../../components/Booth";
import { Inter } from "@next/font/google";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Button,
  Drawer,
  TextInput,
  Textarea,
  Switch,
  ColorInput,
} from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { FiDatabase, FiLogOut } from "react-icons/fi";
import { GoCloudUpload } from "react-icons/go";
import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { Modal } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Data = {
  active: any[];
  inactive: any[];
};

export default function App() {
  // const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) return <div>loading...</div>;

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  const [opened, setOpened] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setURL] = useState("");
  const [website, setWebsite] = useState("");
  const [active, setActive] = useState(true);
  const [color, setColor] = useState("#FFFFFF");

  const { data, error, mutate }: { data: Data; error: any; mutate: any } =
    useSWR("/api/GetRooms/" + user?.sub, fetcher);

  if (!data) return <div className="text-white">Loading...</div>;

  console.log(data);

  let rmProps = {
    name: "SASE",
    description: "Society of Asian Scientists and Engineers",
    event: "SASE Hackathon",
    gradient: ["#008836", "#FFFFFF"],
    active: true,
  };

  async function pushNewBooth() {
    await axios
      .post("/api/CreateRoom", {
        name: name,
        event: event,
        desc: desc,
        url: url,
        website: website,
        active: active,
        color: color,
        roomAdmin: user?.sub,
      })
      .then((response) => {
        console.log(response);
        mutate();
        setOpened(false);
      });
  }

  return (
    <>
      <div className="container mx-auto py-4">
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Create a new Booth"
          padding={"xl"}
          size="xl"
          position="right"
          overlayOpacity={0.55}
          overlayBlur={3}
          styles={{
            drawer: { backgroundColor: "#121212" },
            title: { color: "white", fontSize: "24px" },
          }}
        >
          <TextInput
            placeholder=""
            label="Booth Name"
            withAsterisk
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <br />
          <TextInput
            placeholder=""
            label="Event Name"
            withAsterisk
            value={event}
            onChange={(event) => setEvent(event.currentTarget.value)}
          />
          <br />
          <Textarea
            placeholder=""
            label="Description"
            withAsterisk
            value={desc}
            onChange={(event) => setDesc(event.currentTarget.value)}
          />

          <br />
          <TextInput
            placeholder=""
            label="Flyer URL"
            withAsterisk
            value={url}
            onChange={(event) => setURL(event.currentTarget.value)}
          />
          <br />
          <TextInput
            placeholder=""
            label="Website URL"
            withAsterisk
            value={website}
            onChange={(event) => setWebsite(event.currentTarget.value)}
          />
          <br />
          <Switch
            label="Event is Currently Active"
            checked={active}
            onChange={(event) => setActive(event.currentTarget.checked)}
          />
          {/* <br />
          <ColorInput
            label="Event Color Theme"
            format="hex"
            swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
            // value={color}
            onChange={(event) => setColor}
          /> */}
          <br />
          <Button
            fullWidth
            leftIcon={<GoCloudUpload />}
            onClick={() => pushNewBooth()}
          >
            Create Booth
          </Button>
        </Drawer>

        <div className="absolute top-16 right-16">
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={() =>
              logout({ logoutParams: { returnTo: "http://localhost:3000" } })
            }
          >
            Log Out
            <FiLogOut className="pl-4 text-4xl" />
          </Button>
        </div>

        <div className="text-white text-center flex w-full flex-col mt-44">
          <h1 className="text-5xl font-extrabold text-slate-200">
            Hi, <span className="text-main-accent">{user?.given_name}</span>!
          </h1>
          <h2 className="py-3 text-2xl font-bold antialiased text-[#9C9C9C] pb-12">
            Welcome to your Booths
          </h2>
          <div></div>
          <div className="mx-auto flex flex-col w-[45%]">
            <div className="flex flex-row justify-between">
              {data.inactive.length ? (
                <h3 className="p-3 text-xl font-bold text-left opacity-60">
                  {data.active.length} Active Booth(s)
                </h3>
              ) : null}
              <Button
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                onClick={() => setOpened(true)}
              >
                Create a Booth +
              </Button>
            </div>
            {data.active.map((x) => {
              return (
                <Booth
                  name={x.name}
                  description={x.description}
                  event={x.event}
                  gradient={["#008836", x.color]}
                  active={x.active}
                  roomid={x.roomID}
                  key={x.roomID}
                />
              );
            })}
            {data.inactive.length ? (
              <h3 className="text-xl mt-4 pb-1 font-bold text-left opacity-60">
                {data.inactive.length} Inactive Booth(s)
              </h3>
            ) : null}
            {data.inactive.map((x) => {
              return (
                <Booth
                  name={x.name}
                  description={x.description}
                  event={x.event}
                  gradient={["#008836", x.color]}
                  active={x.active}
                  roomid={x.roomID}
                  key={x.roomID}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
