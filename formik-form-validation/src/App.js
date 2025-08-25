import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country:""
    },
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
          placeholder="Enter UserName"
        />
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter Name"
        />
        <br/>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter Email"
          />
          <br/>
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
        <br/>
        <select name="country" onChange={formik.handleChange} >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Nepal">Nepan</option>
          <option value="Japan">Japan</option>

        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
