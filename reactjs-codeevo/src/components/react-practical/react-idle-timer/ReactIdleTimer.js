// IDLE TIMER IN REACT JS
import React, { useRef, useState } from "react";
import { IdleTimer } from "./IdleTimerContainer";
import Modal from "react-modal";

// USE FOR SESSION TIME OUT

Modal.setAppElement("#root");

const ReactIdleTimer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    if (isLoggedIn) {
      console.log("User is Idle");
      setIsModalOpen(true);
      sessionTimeoutRef.current = setTimeout(logOut, 5000);
    }
  };

  const logOut = () => {
    console.log("User logged out");
    setIsModalOpen(false);
    setIsLoggedIn(false);
  };

  const stayActive = () => {
    console.log("User is active");
    clearInterval(sessionTimeoutRef.current);
    setIsModalOpen(false);
  };
  return (
    <>
      {isLoggedIn ? <h1>Hello Peter!!!</h1> : <p>Hello guest</p>}
      <Modal isOpen={isModalOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon.</p>
        <div>
          <button onClick={logOut}>Log Me Out</button>
          <button onClick={stayActive}>Keep Me Signed In</button>
        </div>
      </Modal>
      <IdleTimer timeout={5 * 1000} onIdle={onIdle} />
    </>
  );
};

// BASIC USE CASE
// const ReactIdleTimer = () => {
//   const idleTimerRef = useRef(null);

//   const onIdle = () => {
//     console.log("User is Idle");
//   };
//   return (
//     <>
//       <IdleTimer timeout={5 * 1000} onIdle={onIdle} />
//     </>
//   );
// };

export default ReactIdleTimer;
