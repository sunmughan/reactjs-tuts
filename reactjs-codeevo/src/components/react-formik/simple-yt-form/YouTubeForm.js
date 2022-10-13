// SIMPLE FORM IN REACT JS
import React from "react";
import styles from "./YouTubeForm.module.css";
import { useFormik } from "formik";

const YouTubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "peter",
      email: "",
      channel: "",
    },
  });

  console.log(formik.values);

  return (
    <div className={styles.youtubeFormContainer}>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type={"text"}
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default YouTubeForm;
