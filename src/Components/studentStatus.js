import React from "react";
import { motion } from "framer-motion";
function AddStatus({ list, submit }) {
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
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <p className="text-center uppercase p-6 font-mono font-bold text-3xl text-[#FF6768] opacity-95 tracking-wider ">
          ADD Student Status
        </p>
        {list.map((val, i) => (
          <motion.div
            variants={item}
            key={i}
            className="border-2 border-red-400 flex justify-between w-[80%] p-3 mb-3 rounded-xl mx-auto"
          >
            <p className="text-[#ffeef4]">{i + 1}</p>
            <p className="text-[#ffeef4] overflow-ellipsis">
              {val.firstname + " "}
              {val.lastname}
            </p>
            <form className="flex gap-x-10" onSubmit={(e) => submit(e, i)}>
              <input
                list="statusType"
                className="border-red-400 border-2 bg-transparent outline-none w-60 h-10 rounded-lg p-2 text-[#ffeef4] placeholder:text-white"
                placeholder="Choose Status"
                name="studentStatus"
              />
              <datalist id="statusType" className=" ">
                <option value="Internship">Internship</option>
                <option value="Employee">Employee</option>
                <option value="Student">Student</option>
              </datalist>
              <input
                list="Salary"
                className="border-red-400 border-2 bg-transparent outline-none w-60 h-10 rounded-lg p-2 text-[#ffeef4] placeholder:text-white"
                placeholder="Choose Salary"
                name="salary"
              />
              <datalist id="Salary" className="">
                <option value="Less than 5L">Less than 5L</option>
                <option value="Greater than 5L">Greater than 5L</option>
                <option value="Greater than 10L">Greater than 10L</option>
                <option value="--not applicable--">--not applicable--</option>
              </datalist>
              <input className="btn-primary" type="submit" />
            </form>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
export default AddStatus;
