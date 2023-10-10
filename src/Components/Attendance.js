import React from "react";
import { motion } from "framer-motion";
function Attendance({ Student, type, type1 }) {
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
        animate="visible"
        initial="hidden"
      >
        <p className="font-bold text-2xl uppercase tracking-wider text-center p-4 text-red-400">
          Add Attendance to Students
        </p>
        {Student.map((val, i) => (
          <motion.div
            key={i}
            className="flex mt-4 mb-3 justify-between flex-shrink-0 text-[#ffeef4] w-[70%] border-2 p-3 mx-auto rounded-lg border-red-400"
            variants={item}
          >
            <p className="w-[4%] ">{i + 1}</p>
            <p className="w-[14%] overflow-ellipsis">
              {val.firstname} {val.lastname}
            </p>
            <input
              type="date"
              className="caret-black rounded-lg  outline-none bg-transparent border-2 border-red-400 "
            />
            <p
              className="text-green-400 border-2 cursor-pointer border-green-400 p-2 rounded-xl hover:shadow-lg hover:shadow-green-300"
              onClick={() => type(i)}
            >
              PRESENT
            </p>
            <p
              className="text-red-600  cursor-pointer border-2 border-red-600 p-2 rounded-xl hover:shadow-lg hover:shadow-red-600 "
              onClick={() => type1(i)}
            >
              ABSENT
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
export default Attendance;
