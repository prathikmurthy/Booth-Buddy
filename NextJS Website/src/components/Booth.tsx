import { motion } from "framer-motion";

type BoothProps = {
  name: string;
  description: string;
  event: string;
  gradient: Array<string>;
  active: boolean;
};
const Booth = (props: BoothProps) => {
    let regClass = "text-left rounded-xl bg-gradient-to-r from-blue-500 to-slate-400 p-4";
    // let inactiveClass = "text-left rounded-xl bg-gradient-to-t from-white to-[#454545] p-4";
    let inactiveClass = "text-left rounded-xl bg-[#454545] p-4";

  return (
    <motion.div className="py-2"
        whileHover={{
            scale: 1.05,
            transition: {ease: "easeInOut" ,duration: .3},
        }}
    >
      <a href="#" className="w-full mx-auto">
        <div className={props.active ? regClass : inactiveClass}>
          <h2 className="font-bold text-3xl">{props.name}</h2>
          <h3 className="font-medium text-lg opacity-[50%]">{props.event}</h3>
        </div>
      </a>
    </motion.div>
  );
};

export default Booth;
