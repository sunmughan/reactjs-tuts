// SIMPLE FORM IN REACT JS
// useFormik Hook
//
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

import styles from "./YouTubeForm.module.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
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
  phNumbers: [""],
};

// let savedValues = {
//   name: "peter",
//   email: "spideyPeter@spider.com",
//   channel: "Spideyyy",
//   comments: "Hello peter - doctor octopus",
//   address: "New york",
//   social: {
//     facebook: "Spidey",
//     twitter: "Spiddey",
//   },
//   phoneNumbers: ["1122112211", "2211221122"],
//   phNumbers: ["1122112211"],
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
  // comments: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  social: Yup.object().shape({
    facebook: Yup.string().required("Required!"),
    twitter: Yup.string().required("Required!"),
  }),
});

let onSubmit = (values, onSubmitProps) => {
  console.log("FORM VALUES >> > > ", values);
  console.log("FORM VALUES >> > > ", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required!";
  }
  return error;
};

const YouTubeForm = () => {
  // const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={initialValues}
      // initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
      // validateOnBlur={false}
      // validateOnChange={false}
      // validateOnMount={false}
      // validateOnMount
    >
      {(formik) => {
        console.log(formik);
        return (
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
                <Field
                  type={"email"}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
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
                <label htmlFor="comments">Comments</label>
                <Field
                  as={"textarea"}
                  type={"text"}
                  id="comments"
                  name="comments"
                  placeholder="Comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments">
                  {(errorMsg) => {
                    return <div className={styles.error}>{errorMsg}</div>;
                  }}
                </ErrorMessage>
              </div>
              <div className={styles.formControl}>
                <label htmlFor="address">Address</label>
                <FastField name="address" placeholder="address">
                  {(props) => {
                    // console.log("Field Rendered");
                    let {
                      field,
                      // form,
                      meta,
                    } = props;
                    return (
                      <div>
                        <input type={"text"} id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div className={styles.error}>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
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
              <div className={StyleSheet.formControl}>
                <label>List of phoen numbers</label>
                <FieldArray name="phNumbers">
                  {(FieldArrayProps) => {
                    const { push, remove, form } = FieldArrayProps;
                    const { values } = form;
                    console.log("errrr >> ", form.errors);
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button type="button" onClick={() => push(index)}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <div>
                {/* <button
                  type="button"
                  onClick={() => {
                    formik.validateField("comments");
                  }}
                >
                  Validate Comments
                </button>
                <button
                  type="button"
                  onClick={() => {
                    formik.validateForm();
                  }}
                >
                  Validate Form
                </button>
                <button
                  type="button"
                  onClick={() => {
                    formik.setFieldTouched("comments");
                  }}
                >
                  Visit Comments
                </button>
                <button
                  type="button"
                  onClick={() => {
                    formik.setTouched({
                      name: true,
                      email: true,
                      channel: true,
                      comments: true,
                      address: true,
                      social: {
                        facebook: true,
                        twitter: true,
                      },
                    });
                  }}
                >
                  Visit Form Fields
                </button> */}
                {/* <button
                  type="submit"
                  disabled={!formik.dirty && !formik.isValid}
                >
                  Submit
                </button> */}
                {/* <button
                  type={"button"}
                  onClick={() => {
                    setFormValues(savedValues);
                  }}
                >
                  Load Saved Data
                </button> */}
                <button type={"reset"}>Reset</button>
                <button type="submit" disabled={formik.isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default YouTubeForm;
