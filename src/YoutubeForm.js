import { useFormik } from "formik";
import "./YoutubeForm.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: ""
};

const onSubmit = (values) => {
  console.log("Values : ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email Format"),
  channel: Yup.string().required("Required")
});

export const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log(formik.touched);

  return (
    <div className="form-outer">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel && (
            <p>{formik.errors.channel}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(formik.values)}</p>
    </div>
  );
};
