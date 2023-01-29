import Image from "next/image";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";


const About = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="text-white container mx-auto py-4 h-full">
      <h1 className="text-6xl font-bold pb-3 mb-5  px-5">
        What is BoothBuddy?
      </h1>
      <p className="text-lg w-[60%] mb-52  px-5">
        Created with sustainability in mind, BoothBuddy is a platform for
        sharing club and recruiter information without the need of paper flyers.
      </p>
      <div className="relative">

      <div className="absolute -top-24 left-0"><Image src={"/../public/cart.gif"} height={500} width={550} alt="a" /></div>
      </div>
      <div className="flex flex-col items-end text-right">
        <h1 className="text-5xl font-bold pb-3 mb-5 px-5">
          Why Was BoothBuddy Created?
        </h1>
        <p className="text-lg w-[60%] mb-52  px-5">
          BoothBuddy aimed to solve two issues. One, the amount of paper flyers
          printed that are wasted and thrown away. Two, the lack of cell
          reception during the fair. BoothBuddy allows you to view all the
          information you need without the need of paper flyers.
        </p>
        <div className="relative w-96">

          <div className="absolute -top-36 right-"><Image src={"/../public/stand2.gif"} height={400} width={400} alt="a" /></div>
        </div>
      </div>
      <h1 className="text-6xl font-bold pb-3 mb-5  px-5">
        How Does BoothBuddy Work?
      </h1>
      <p className="text-lg w-[60%] mb-24  px-5">
        BoothBuddy aimed to solve two issues. One, the amount of paper flyers
        printed that are wasted and thrown away. Two, the lack of cell reception
        during the fair. BoothBuddy allows you to view all the information you
        need without the need of paper flyers.
      </p>
      <div className="flex flex-row justify-center mb-24">
        {!isAuthenticated ? (
          <Button
            variant="gradient"
            onClick={() => loginWithRedirect()}
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Create Your First Booth
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default About;
