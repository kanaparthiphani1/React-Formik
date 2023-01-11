import { Formik, Form, Field, ErrorMessage } from "formik";
import "./YoutubeForm.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  mobile: "",
  comments: ""
};

const onSubmit = (values) => {
  console.log("Values : ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email Format"),
  channel: Yup.string().required("Required"),
  mobile: Yup.string().required("Required"),
  comments: Yup.string().required("Required")
});

export const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form-outer">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="p" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="p" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component="p" />
        </div>
        <div className="form-control">
          <label htmlFor="mobile">Mobile</label>
          <Field name="mobile">
            {(props) => {
              return <input type="text" {...props.field} />;
            }}
          </Field>
          <ErrorMessage name="mobile" component="p" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments">
            {(errorMsg) => {
              return <p className="error">{errorMsg}</p>;
            }}
          </ErrorMessage>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
