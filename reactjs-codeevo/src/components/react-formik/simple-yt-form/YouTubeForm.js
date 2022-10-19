// SIMPLE FORM IN REACT JS
import React from "react";
import styles from "./YouTubeForm.module.css";
import { useFormik } from "formik";

const YouTubeForm = () => {
  const formik = useFormik({
    initialValues: {
      // name: "peter",
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0=9.=]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format.";
      }
      if (!values.channel) {
        errors.channel = "Required";
      }
      console.log(errors);
    },
  });

  // console.log(formik.values);

  return (
    <div className={styles.youtubeFormContainer}>
      <form onSubmit={formik.handleSubmit}>
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
