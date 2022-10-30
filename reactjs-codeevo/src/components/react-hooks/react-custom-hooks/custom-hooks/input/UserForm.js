// CUSTOM HOOKS IN REACT JS
// INPUT HOOK

import useInput from "../../../../../hooks/useInput";

const UserForm = () => {
  // WITHOUT CUSTOM HOOK
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     alert(`Hello ${firstName} ${lastName}`);
  //   };

  //   return (
  //     <>
  //       <form onSubmit={submitHandler}>
  //         <div>
  //           <label>First Name</label>
  //           <input
  //             value={firstName}
  //             onChange={(e) => {
  //               setFirstName(e.target.value);
  //             }}
  //             type={"text"}
  //           />
  //         </div>
  //         <div>
  //           <label>Last Name</label>
  //           <input
  //             value={lastName}
  //             onChange={(e) => {
  //               setLastName(e.target.value);
  //             }}
  //             type={"text"}
  //           />
  //         </div>
  //         <button>Submit</button>
  //       </form>
  //     </>
  //   );

  // WITH CUSTOM HOOK
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName} type={"text"} />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastName} type={"text"} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserForm;
