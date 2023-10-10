import React from "react";
import { motion } from "framer-motion";

function ViewStatus({ status }) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="w-[80%]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <p className="text-center p-6 font-mono font-bold text-3xl text-[#FF6768] opacity-95 tracking-wider ">
          STUDENT STATUS
        </p>

        {status.map((val, i) => (
          <motion.div
            key={i}
            className="w-[80%] border-2 flex p-5 justify-between mb-2 rounded-lg text-[#ffeef4] mx-auto border-red-400"
            variants={item}
          >
            <p>{i + 1}</p>
            <p className="w-[20%] ">
              {val.firstname + " "}
              {val.lastname}
            </p>
            {val.studentStatus !== "" ? (
              <p className="w-[20%] text-green-300">{val.studentStatus}</p>
            ) : (
              <p className="text-red-500 w-[20%] uppercase font-semibold text-sm">
                need to update
              </p>
            )}
            {val.Salary !== "" ? (
              <p className="w-[20%] text-green-300">{val.Salary}</p>
            ) : (
              <p className="text-red-500 w-[20%] uppercase font-semibold text-sm">
                Need to Update
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default ViewStatus;
