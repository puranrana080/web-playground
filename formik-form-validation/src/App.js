import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "username must be less than or equal to 10 characters")
        .required("This is required field"),
      name: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Please provide a valid email")
        .required("This field is required"),
      status: Yup.string().required("This field is required"),
      country: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          placeholder="Enter UserName"
        />
        {formik.touched.username && formik.errors.username && (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        )}
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          placeholder="Enter Name"
        />
         {formik.touched.name && formik.errors.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
        <br />
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="Enter Email"
        />
         {formik.touched.email && formik.errors.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
        <br />
        <span>Your Status: </span>

        <input
          type="radio"
          name="status"
          value="single"
          onChange={formik.handleChange}
        />
        <label>Single</label>
        <input
          type="radio"
          name="status"
          value="Commited"
          onChange={formik.handleChange}
        />
        <label>Commited</label>
        <input
          type="radio"
          name="status"
          value="coder"
          onChange={formik.handleChange}
        />
        <label>Coder</label>
         {formik.touched.status && formik.errors.status && (
          <p style={{ color: "red" }}>{formik.errors.status}</p>
        )}
        <br />
        <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Nepal">Nepan</option>
          <option value="Japan">Japan</option>
        </select>
         {formik.touched.country && formik.errors.country && (
          <p style={{ color: "red" }}>{formik.errors.country}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
