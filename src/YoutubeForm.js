import { useFormik } from "formik";
import "./YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Values : ", values);
};

const validate = (values) => {
  const error = {};
  if (!values.name) {
    error.name = "Required";
  }

  if (!values.email) {
    error.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = "Invalid email format";
  }
  if (!values.channel) {
    error.channel = "Required";
  }

  return error;
};

export const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="form-outer">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(formik.values)}</p>
    </div>
  );
};
