// SIMPLE FORM IN REACT JS
import React from "react";
import styles from "./YouTubeForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

let initialValues = {
  name: "peter",
  email: "",
  channel: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

let onSubmit = (values) => {
  console.log(values);
};

const YouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styles.youtubeFormContainer}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
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
            {...formik.getFieldProps("email")}
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
            {...formik.getFieldProps("channel")}
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

export default YouTubeForm;
