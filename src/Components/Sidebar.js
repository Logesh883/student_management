import React from "react";

function Side({ setfindValue, Value }) {
  return (
    <>
      <div className="bg-[#6B728E] flex flex-col w-64 p-4 min-h-screen divide-y-2 divide-black ">
        <div
          className="flex flex-row-reverse gap-x-5 mb-2"
          onClick={() => setfindValue(8)}
        >
          <div>
            <p className="font-bold tracking-widest text-[#FF6768]">
              KitKat Tech..
            </p>
            <p className="font-medium tracking-wider text-[#fa9191]">Active</p>
          </div>
          <img
            src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
            alt="Profile_icon"
            className="w-20 h-20"
          />
        </div>
        <div className="flex  flex-col p-3 ">
          <details className="flex">
            <summary className=" uppercase font-medium tracking-wider  text-[#FF6768] flex">
              Students
            </summary>
            <summary
              className="list-none pl-5 capitalize font-medium tracking-wide text-pink-400 cursor-pointer rounded-xl "
              onClick={() => setfindValue(1)}
              style={
                Value === 1
                  ? {
                      background: "#474E68",
                      color: "white",
                      padding: "8px",
                    }
                  : {}
              }
            >
              Add Students
            </summary>
            <summary
              className="list-none pl-5 capitalize cursor-pointer font-medium tracking-wider text-pink-400 rounded-xl"
              onClick={() => setfindValue(2)}
              style={
                Value === 2
                  ? {
                      background: "#474E68",
                      color: "white",
                      padding: "8px",
                    }
                  : {}
              }
            >
              View Students
            </summary>
          </details>
          <details className="flex my-5">
            <summary className=" uppercase  font-medium tracking-wider  text-[#FF6768] flex">
              Attendance
            </summary>
            <summary
              className="list-none pl-5 capitalize cursor-pointer  font-medium tracking-wide text-pink-400  rounded-xl "
              onClick={() => setfindValue(3)}
              style={
                Value === 3
                  ? {
                      background: "#474E68",
                      color: "white",
                      padding: "8px",
                    }
                  : {}
              }
            >
              Add Attendance
            </summary>
            <summary
              className="list-none pl-5 capitalize cursor-pointer font-medium tracking-wider text-pink-400 rounded-xl "
              onClick={() => setfindValue(4)}
              style={
                Value === 4
                  ? {
                      background: "#474E68",
                      color: "white",
                      padding: "8px",
                    }
                  : {}
              }
            >
              View Attendance
            </summary>
          </details>

          <details className="flex ">
            <summary className=" uppercase font-medium tracking-wider  text-[#FF6768] flex">
              Student Status
            </summary>
            <summary
              className="list-none pl-5 capitalize font-medium tracking-wide cursor-pointer  text-pink-400  rounded-xl "
              onClick={() => setfindValue(5)}
              style={
                Value === 5
                  ? {
                      background: "#474E68",
                      color: "white",
                      padding: "8px",
                    }
                  : {}
              }
            >
              Add Status
            </summary>
            <summary
              className="list-none pl-5 capitalize font-medium tracking-wider cursor-pointer  text-pink-400 rounded-xl"
              onClick={() => setfindValue(6)}
              style={
                Value === 6
                  ? {
                      background: "#474E68",
                      color: "white",
                      padding: "8px",
                    }
                  : {}
              }
            >
              View Status
            </summary>
          </details>
        </div>
      </div>
    </>
  );
}

export default Side;
