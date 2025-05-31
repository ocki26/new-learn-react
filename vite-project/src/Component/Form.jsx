import { use, useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // function handleChange(e) {
  //   setName(e.target.value);
  //   console.log(name)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <>
      <div>
        {name.fistName}-{name.lastName}
        <form>
          <input
            // onChange={function demo(e) {
            //   return handleChange(e);
            // }}
            // onChange={(e) => handleChange(e)}
            // type="text"
            // value={name}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            type="text"
            value={name.fistName}
          />
          <input
            type="text"
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            value={name.lastName}
          />
          <button onClick={(e) => handleSubmit(e)}>Add</button>
        </form>
      </div>
    </>
  );
};
export default Form;
