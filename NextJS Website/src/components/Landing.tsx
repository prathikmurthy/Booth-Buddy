import { motion } from "framer-motion"
import { FiChevronsDown } from "react-icons/fi"
import Image from "next/image";

export default function Section(props: any) {
  return (
    <section className="container h-screen w-screen flex mx-auto tracking-widest">
      <motion.div className="flex flex-col justify-center align-middle w-full text-center" >
        <Image src={"/../public/stand.gif"} width={300} height={300} alt="a"/>
        <motion.h1 className="text-7xl font-extrabold text-slate-100" animate={{ y: 0, opacity: 1 }} initial={{ y: -150, opacity: 0 }} transition={{ duration: 1, delay: 1 }}>
          Booth<span className="text-[#5CA08E]">Buddy</span>
        </motion.h1>
        <motion.h1 className="text-4xl antialiased text-slate-400 pt-4 tracking-wide" animate={{ y: 0, opacity: 1 }} initial={{ y: -150, opacity: 0 }} transition={{ duration: 1, delay: 2.5 }}>
          Saving flyers, one page at a time.
        </motion.h1>

        <motion.div className="text-7xl text-center text-white w-full mb-24" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 4}}>
          <motion.div animate={{ y: [120, 180, 120] }} initial={{y: 150}} transition={{type: "spring", duration: 2, repeat: Infinity}}><FiChevronsDown className="mx-auto" /></motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
