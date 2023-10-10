import React from "react";
import { motion } from "framer-motion";
function ViewAttendance({ Student }) {
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
        <h1 className="text-center p-6 font-mono font-bold text-3xl text-[#FF6768] opacity-95 tracking-wider ">
          ATTENDANCE OF STUDENT
        </h1>
        {Student.map((val, i) => (
          <motion.div
            key={i}
            className="border-2 border-red-400 w-[80%] text-[#ffeef4] flex justify-between p-5 rounded-xl mb-2 mx-auto"
            variants={item}
          >
            <p className="w-[5%]">{i + 1}</p>
            <p className="w-[20%]">
              {val.firstname + " "}
              {val.lastname}
            </p>
            <p className="w-[20%]">
              <span className="mr-3 text-green-400">{val.presentCount}</span>
              of 120 Days
            </p>
            <p className="w-[20%]">
              <span className="text-red-500">{val.absentCount}</span> of 120
              Days
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
export default ViewAttendance;
