// SIMPLE FORM IN REACT JS

import styles from "./YouTubeForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

let initialValues = {
  name: "peter",
  // name: "",
  email: "",
  channel: "",
};

let onSubmit = (values) => {
  console.log(values);
};

let validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0=9.=]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format.";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const OldYouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log("FORMIK VALUES OBJECT >>> ", formik.values);
  // console.log("FORMIK ERRORS  OBJECT >>> ", formik.errors);
  console.log("FORMIK VISITED FIELDS OBJECT >>> ", formik.touched);

  return (
    <div className={styles.youtubeFormContainer}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="channel">Channel</label>
          <input
            type={"text"}
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className={styles.error}>{formik.errors.channel}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OldYouTubeForm;
