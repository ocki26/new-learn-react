import { use, useState } from "react";
const [name, setName] = useState("");
const Form = () => {
  function handleChange(e) {
    console.log(e);
  }
  return (
    <>
      <div>
        <form>
          <input
            onChange={function demo(e) {
              return handleChange(e);
            }}
            type="text"
            value={name}
          />
        </form>
      </div>
    </>
  );
};
export default Form;
