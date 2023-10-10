import React from "react";

function StudentView({ Array, Del }) {
  return (
    <div className="w-[83%] mb-7">
      <h1 className="text-center p-6 font-mono font-bold text-3xl text-[#FF6768] opacity-95 tracking-widest ">
        STUDENT LIST
      </h1>
      <table className="">
        <tr>
          <th>S.No</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Address</th>
          <th>Option</th>
        </tr>
        {Array.length > 0 &&
          Array.map((val, i) => (
            <tr key={i}>
              <td className="w-[2%]  text-center p-3">{i + 1}</td>
              <td className="w-[20%]  text-center p-3">{val.firstname}</td>
              <td className="w-[20%]  text-center p-3">{val.lastname}</td>
              <td className="w-[20%]  text-center p-3">{val.email}</td>
              <td className="w-[20%]  text-center p-3">{val.address}</td>
              <td
                className="w-[20%]  text-center  h-fit "
                onClick={() => Del(i)}
              >
                <p className="bg-blue-500 hover:bg-blue-700 hover:shadow-lg  rounded-lg w-fit h-fit p-2 text-center cursor-pointer ml-14 text-gray-200">
                  Remove
                </p>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
export default StudentView;
