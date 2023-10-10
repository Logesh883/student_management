import React, { useEffect, useRef } from "react";
function StudentForm({ setValue }) {
  const foc = useRef();
  useEffect(() => {
    foc.current.focus();
  }, [setValue]);
  return (
    <>
      <div className="mx-auto flex flex-col p-10 gap-y-10 ">
        <h1 className="text-3xl font-bold tracking-widest uppercase text-[#FF6768] ml-16  ">
          Student Register
        </h1>
        <form className=" flex flex-col gap-y-8 " onSubmit={(e) => setValue(e)}>
          <div className="flex">
            <label className="label">First Name</label>
            <input type="text" class="input-field" name="firstname" ref={foc} />
          </div>
          <div className="flex">
            <label class="label">Last Name</label>
            <input type="text" class="input-field" name="lastname" />
          </div>
          <div className="flex">
            <label class="label">Email</label>
            <input type="email" className="input-field" name="email" />
          </div>
          <div className="flex">
            <label class="label">Address</label>
            <textarea type="" className="input-field x" name="address" />
          </div>
          <div className="text-center">
            {" "}
            <input type="submit" className="btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
}
export default StudentForm;
