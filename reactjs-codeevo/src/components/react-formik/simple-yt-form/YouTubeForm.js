// SIMPLE FORM IN REACT JS
// useFormik Hook
// import React from "react";
// import styles from "./YouTubeForm.module.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// let initialValues = {
//   name: "peter",
//   email: "",
//   channel: "",
// };

// const validationSchema = Yup.object({
//   name: Yup.string().required("Required!"),
//   email: Yup.string().email("Invalid Email Format!").required("Required!"),
//   channel: Yup.string().required("Required!"),
// });

// let onSubmit = (values) => {
//   console.log(values);
// };

// const YouTubeForm = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validationSchema,
//   });

//   return (
//     <div className={styles.youtubeFormContainer}>
//       <form onSubmit={formik.handleSubmit}>
//         <div className={styles.formControl}>
//           <label htmlFor="name">Name</label>
//           <input
//             type={"text"}
//             id="name"
//             name="name"
//             {...formik.getFieldProps("name")}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div >{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <div className={styles.formControl}>
//           <label htmlFor="email">Email</label>
//           <input
//             type={"email"}
//             id="email"
//             name="email"
//             {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div >{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div className={styles.formControl}>
//           <label htmlFor="channel">Channel</label>
//           <input
//             type={"text"}
//             id="channel"
//             name="channel"
//             {...formik.getFieldProps("channel")}
//           />
//           {formik.touched.channel && formik.errors.channel ? (
//             <div >{formik.errors.channel}</div>
//           ) : null}
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default YouTubeForm;

import React from "react";
import styles from "./YouTubeForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

let initialValues = {
  name: "peter",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
  comments: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  social: Yup.object().shape({
    facebook: Yup.string().required("Required!"),
    twitter: Yup.string().required("Required!"),
  }),
});

let onSubmit = (values) => {
  console.log(values);
};

const YouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className={styles.youtubeFormContainer}>
        <Form>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <Field type={"text"} id="name" name="name" placeholder="Name" />
            <ErrorMessage
              name="name"
              component={TextError}
              // component={"div"}
              // className={styles.error}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <Field type={"email"} id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="channel">Channel</label>
            <Field
              type={"text"}
              id="channel"
              name="channel"
              placeholder="Channel"
            />
            <ErrorMessage name="channel" component={TextError} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="channel">Channel</label>
            <Field
              as={"textarea"}
              type={"text"}
              id="comments"
              name="comments"
              placeholder="Comments"
            />
            <ErrorMessage name="comments">
              {(errorMsg) => {
                return <div className={styles.error}>{errorMsg}</div>;
              }}
            </ErrorMessage>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="address">Address</label>
            <Field name="address" placeholder="address">
              {(props) => {
                // console.log(props);
                let { field, form, meta } = props;
                console.log(form);
                return (
                  <div>
                    <input type={"text"} id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div className={styles.error}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="facebook">Facebook</label>
            <Field
              type={"text"}
              id="facebook"
              name="social.facebook"
              placeholder="Facebook"
            />
            <ErrorMessage name="social.facebook" component={TextError} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="twitter">Twitter</label>
            <Field
              type={"text"}
              id="twitter"
              name="social.twitter"
              placeholder="Twitter"
            />
            <ErrorMessage name="social.twitter" component={TextError} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="primaryPh">Primary Phone Number</label>
            <Field
              type={"text"}
              id="primaryPh"
              name="phoneNumbers[0]"
              placeholder="Primary Phone Number"
            />
            {/* <ErrorMessage name="social.twitter" component={TextError} /> */}
          </div>
          <div className={styles.formControl}>
            <label htmlFor="secondaryPh">Secondary Phone Number</label>
            <Field
              type={"text"}
              id="secondaryPh"
              name="phoneNumbers[1]"
              placeholder="Secondary Phone Number"
            />
            {/* <ErrorMessage name="social.twitter" component={TextError} /> */}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default YouTubeForm;