import { useEffect, useState } from "react";
import Side from "./Components/Sidebar";
import StudentForm from "./Components/studentForm";
import StudentView from "./Components/ViewStudent";
import Screen from "./Components/Images/Snapinsta.app_361567956_2001423040210195_8983464168304746411_n_1080.jpg";
import Attendance from "./Components/Attendance";
import ViewAttendance from "./Components/ViewAttendance";
import AddStatus from "./Components/studentStatus";
import ViewStatus from "./Components/ViewStatus";

function App() {
  const initialData = JSON.parse(localStorage.getItem("data")) || [];

  const [studentList, setStudentList] = useState(initialData);
  const [findValue, setfindValue] = useState();

  const Submit = (e) => {
    e.preventDefault();
    if (
      e.target.firstname.value !== "" &&
      e.target.lastname.value !== "" &&
      e.target.email.value !== "" &&
      e.target.address.value !== ""
    ) {
      const newObj = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value.toUpperCase(),
        email: e.target.email.value,
        address: e.target.address.value,
        presentCount: 0,
        absentCount: 0,
        studentStatus: "",
        Salary: "",
      };
      setStudentList((m) => [...m, newObj]);
      e.target.reset();
    } else {
      alert("Enter all Details");
    }
  };
  const deleteItem = (index) => {
    const updatedList = [...studentList];
    updatedList.splice(index, 1);
    setStudentList(updatedList);
    localStorage.setItem("data", JSON.stringify(updatedList));
  };
  let preCount = (i) => {
    const list = [...studentList];
    const array = list[i];
    array.presentCount = array.presentCount + 1;
    setStudentList([...list]);
    localStorage.setItem("data", JSON.stringify(list));
  };
  let DelCount = (i) => {
    const list = [...studentList];
    const array = list[i];
    array.absentCount = array.absentCount + 1;
    setStudentList([...list]);
    localStorage.setItem("data", JSON.stringify(list));
  };
  let updateStatus = (e, i) => {
    e.preventDefault();
    const status = [...studentList];
    let value = status[i];
    if (e.target.studentStatus.value !== "" && e.target.salary.value !== "") {
      value.studentStatus = e.target.studentStatus.value;
      value.Salary = e.target.salary.value;
    } else {
      alert("Fill both fields");
    }
    setStudentList([...status]);
    localStorage.setItem("data", JSON.stringify(status));
    e.target.reset();
  };
  useEffect(() => {
    if (studentList.length > 0)
      localStorage.setItem("data", JSON.stringify(studentList));
  }, [studentList]);

  return (
    <>
      <div className="flex w-screen bg-gradient-to-tr from-[#6B728E] to-[#474E68] ">
        <Side setfindValue={setfindValue} Value={findValue} />
        {(() => {
          switch (findValue) {
            case 1:
              return <StudentForm setValue={(e) => Submit(e)} />;
            case 2:
              return (
                <StudentView
                  Array={studentList}
                  Del={(e, i) => deleteItem(e, i)}
                />
              );
            case 3:
              return (
                <Attendance
                  Student={studentList}
                  type={(i) => preCount(i)}
                  type1={(i) => DelCount(i)}
                />
              );
            case 4:
              return <ViewAttendance Student={studentList} />;
            case 5:
              return (
                <AddStatus
                  list={studentList}
                  submit={(e, i) => updateStatus(e, i)}
                />
              );
            case 6:
              return <ViewStatus status={studentList} />;

            default:
              return (
                <div className="w-[83%] h-screen text-center p-5">
                  <h1 className="text-yellow-400 text-xl font-bold uppercase tracking-wider ">
                    KitKat Software Technologies
                  </h1>
                  <img
                    src={Screen}
                    alt="Logesh"
                    className=" object-contain w-[80%] h-[90vh] mt-3 ml-32"
                  />
                </div>
              );
          }
        })()}
      </div>
    </>
  );
}

export default App;
