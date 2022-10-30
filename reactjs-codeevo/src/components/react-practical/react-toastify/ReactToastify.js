import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CustomComp = ({ closeToast }) => {
  return (
    <>
      <p>Something Went Wrong!</p>
      <button onClick={closeToast}>Close</button>
    </>
  );
};

const ReactToastify = () => {
  const notify = () => {
    toast("Basic Notification");
  };

  const notifyWithPosition = () => {
    toast("Basic Notification with position", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast("Basic Notification with position", {
      position: toast.POSITION.TOP_CENTER,
    });
    toast("Basic Notification with position", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast("Basic Notification with position", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    toast("Basic Notification with position", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic Notification with position", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const notifyWithType = () => {
    toast.success("Basic Success Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.info("Basic Info Notification", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.warn("Basic Warning Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    toast.error("Basic Error Notification", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const notifyWithAutoClose = () => {
    toast.success("Basic Success Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.info("Basic Info Notification", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 1000,
    });
    toast.warn("Basic Warning Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 8000,
    });
    toast.error("Basic Error Notification", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
  };

  const notifyWithCustComp = () => {
    toast.error(<CustomComp />, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <>
      <button onClick={notify}>Notify</button>
      <button onClick={notifyWithPosition}>Notify With Position</button>
      <button onClick={notifyWithType}>Notify With Types</button>
      <button onClick={notifyWithAutoClose}>Notify With Auto Close</button>
      <button onClick={notifyWithCustComp}>Notify With Custom Component</button>
    </>
  );
};

export default ReactToastify;
